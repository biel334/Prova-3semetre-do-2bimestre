# Projeto API REST — Desenvolvimento Web (2º Bimestre)

Aplicação backend (sem frontend) que fornece APIs REST para gestão de usuários, alunos, cursos e a matrícula de alunos em cursos (relação N:N).

## Containers utilizados

| Container | Imagem | Função |
|---|---|---|
| `postgres-container` | `postgres:17` | Banco de dados |
| `node-container` | build local (Node 24, multi-stage) | Servidor da API (privado, sem porta exposta no host) |
| `nginx-container` | `nginx:alpine` | Proxy reverso — único ponto de acesso externo |

Arquitetura: `Host -> Nginx -> Node Web Server -> PostgreSQL`

O servidor Node.js **não** tem porta publicada no host. Todo acesso externo passa obrigatoriamente pelo Nginx, na porta `8080`.

## Pré-requisitos

- Docker e Docker Compose instalados
- Copiar o arquivo de variáveis de ambiente:
```bash
  cp projeto-api/.env.example projeto-api/.env
```
  (edite `JWT_SECRET` e as credenciais do banco se quiser usar valores próprios)

## Como executar o projeto

```bash
cd projeto-api
docker compose up --build
```

A API ficará disponível em `http://localhost:8080`.

## Como executar as migrations

```bash
docker compose exec node-container node command.js migrate
```

Para reverter a última migration:
```bash
docker compose exec node-container node command.js migrate:undo
```

## Criando o usuário inicial (seed)

Como **todas as rotas exigem token JWT, exceto `/login`**, é necessário existir ao menos um usuário no banco para conseguir logar pela primeira vez. Rode o seeder abaixo logo após as migrations:

```bash
docker compose exec node-container node command.js seed
```

Isso cria o usuário administrador inicial:
- **email:** `admin@email.com`
- **senha:** `123456`

> Depois de logado, use a rota `POST /users` (autenticada) para cadastrar os demais usuários.

## Como realizar login e usar o token JWT

**1. Fazer login com o usuário do seed:**
```bash
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@email.com","password":"123456"}'
```

A resposta retorna o token:
```json
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
```

**2. Usar o token em qualquer rota protegida:**
```bash
curl http://localhost:8080/students \
  -H "Authorization: Bearer SEU_TOKEN"
```

**3. Criar novos usuários (rota protegida):**
```bash
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -d '{"name":"Gabriel","email":"gabriel@email.com","password":"123456"}'
```

## Documentação Swagger

Disponível em: **http://localhost:8080/api-docs/**

Contém as rotas de `list`, `get`, `create`, `update` e `delete` para `users`, `students`, `courses`, além das rotas de relacionamento em `student-courses` e a rota de `login`.

## Endpoints principais

| Método | Rota | Protegida | Descrição |
|---|---|---|---|
| POST | `/login` | Não | Gera token JWT |
| GET/POST/PUT/DELETE | `/users` | Sim | CRUD de usuários |
| GET/POST/PUT/DELETE | `/students` | Sim | CRUD de alunos |
| GET/POST/PUT/DELETE | `/courses` | Sim | CRUD de cursos |
| POST | `/student-courses` | Sim | Vincula aluno a curso |
| GET | `/student-courses` | Sim | Lista alunos com seus cursos |
| DELETE | `/student-courses` | Sim | Remove vínculo aluno-curso |

## Troubleshooting

- **Erro de conexão com o banco no primeiro `up`:** o Postgres pode demorar alguns segundos para ficar saudável; o `node-container` já espera o `healthcheck` do banco (`depends_on: condition: service_healthy`), mas se ainda assim falhar, rode `docker compose up --build` novamente.
- **Para zerar tudo e recomeçar:**
```bash
  docker compose down -v
  docker compose up --build
  docker compose exec node-container node command.js migrate
  docker compose exec node-container node command.js seed
```