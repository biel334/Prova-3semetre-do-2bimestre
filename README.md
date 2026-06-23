# Sistema Escolar — API REST (Prova 2º Bimestre)

Aplicação backend (sem frontend) que fornece APIs REST para gestão de um sistema escolar: alunos, matérias, professores, notas (vínculo aluno-matéria, relação N:N) e presenças. O banco de dados é o mesmo modelado e documentado na disciplina de Banco de Dados (pasta `banco-de-dados/`).

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

**PowerShell (Windows):**
```powershell
Copy-Item projeto-api\.env.example projeto-api\.env
```

**bash (Linux/Mac/Git Bash/WSL):**
```bash
cp projeto-api/.env.example projeto-api/.env
```

(edite `JWT_SECRET` e as credenciais do banco se quiser usar valores próprios)

## Como executar o projeto

```bash
cd projeto-api
docker compose up --build
```

(esse comando é igual em PowerShell e bash)

A API ficará disponível em `http://localhost:8080`.

## Como executar as migrations

```bash
docker compose exec node-container node command.js migrate
```

Para reverter a última migration:
```bash
docker compose exec node-container node command.js migrate:undo
```

## Criando os dados iniciais (seed)

Como **todas as rotas exigem token JWT, exceto `/login`**, é necessário existir ao menos um usuário no banco para conseguir logar pela primeira vez. Rode o seeder abaixo logo após as migrations — ele cria o usuário admin **e** uma carga de dados de teste (matérias, alunos, professores, notas e presenças):

```bash
docker compose exec node-container node command.js seed
```

Isso cria o usuário administrador inicial:
- **email:** `admin@email.com`
- **senha:** `123456`

> Depois de logado, use a rota `POST /usuarios` (autenticada) para cadastrar outros usuários do sistema.

## Como realizar login e usar o token JWT

**1. Fazer login com o usuário do seed:**

⚠️ Se você abrir o terminal integrado do VS Code no Windows, ele abre **PowerShell por padrão**. O PowerShell não entende `\` para quebra de linha nem aspas simples como string — por isso os comandos de `curl` ficam diferentes do bash.

**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:8080/login" -Method POST -ContentType "application/json" -Body '{"email":"admin@email.com","senha":"123456"}'
```

Ou, se preferir usar o `curl` de verdade (não o alias do PowerShell), use `curl.exe`:
```powershell
curl.exe -X POST http://localhost:8080/login -H "Content-Type: application/json" -d "{\"email\":\"admin@email.com\",\"senha\":\"123456\"}"
```

**bash / Git Bash / WSL:**
```bash
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@email.com","senha":"123456"}'
```

A resposta retorna o token:
```json
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
```

**2. Usar o token em qualquer rota protegida:**

**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:8080/alunos" -Headers @{ Authorization = "Bearer SEU_TOKEN" }
```

**bash:**
```bash
curl http://localhost:8080/alunos \
  -H "Authorization: Bearer SEU_TOKEN"
```

**3. Criar um novo aluno (rota protegida):**

**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:8080/alunos" -Method POST -ContentType "application/json" -Headers @{ Authorization = "Bearer SEU_TOKEN" } -Body '{"nome":"Novo Aluno","email":"novo@email.com","curso":"Informática"}'
```

**bash:**
```bash
curl -X POST http://localhost:8080/alunos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -d '{"nome":"Novo Aluno","email":"novo@email.com","curso":"Informática"}'
```

> Dica: se quiser usar exatamente a sintaxe bash (com `\` e aspas simples), abra um terminal **Git Bash** ou **WSL** no VS Code, em vez do PowerShell padrão.

## Documentação Swagger

Disponível em: **http://localhost:8080/api-docs/**

Contém as rotas de `list`, `get`, `create`, `update` e `delete` para `usuarios`, `alunos`, `materias`, `professores` e `presencas`, além das rotas da tabela pivô `notas` (vínculo N:N aluno-matéria) e a rota de `login`.

## Modelo de dados

| Tabela | Descrição |
|---|---|
| `usuarios` | Autenticação do sistema (login/JWT), senha com bcrypt |
| `alunos` | Alunos da escola |
| `materias` | Matérias/disciplinas |
| `professores` | Professores, vinculados a uma matéria (`materia_id`) |
| `notas` | **Tabela pivô** da relação N:N entre `alunos` e `materias` (cada nota associa um aluno a uma matéria) |
| `presencas` | Registro de presença de cada aluno por data |

## Endpoints principais

| Método | Rota | Protegida | Descrição |
|---|---|---|---|
| POST | `/login` | Não | Gera token JWT |
| GET/POST/PUT/DELETE | `/usuarios` | Sim | CRUD de usuários |
| GET/POST/PUT/DELETE | `/alunos` | Sim | CRUD de alunos |
| GET/POST/PUT/DELETE | `/materias` | Sim | CRUD de matérias |
| GET/POST/PUT/DELETE | `/professores` | Sim | CRUD de professores |
| GET/POST/PUT/DELETE | `/presencas` | Sim | CRUD de presenças |
| GET/POST/PUT/DELETE | `/notas` | Sim | CRUD da tabela pivô (vínculo aluno-matéria) |
| GET | `/alunos-materias` | Sim | Lista alunos com as matérias e notas vinculadas |

## Estrutura do repositório

```
.
├── projeto-api/        # Entrega de Desenvolvimento Web (API REST + Docker + Nginx)
└── banco-de-dados/      # Entrega de Banco de Dados (modelagem, DER, dicionário, queries, justificativa)
```

As duas pastas são entregas de disciplinas diferentes, mas compartilham o mesmo domínio de dados (escola: alunos, matérias, professores, notas, presenças). O schema rodando de fato em produção é o definido pelas migrations em `projeto-api/migrations/`; os arquivos em `banco-de-dados/` (dump SQL, DER, dicionário de dados, queries de exemplo) documentam a modelagem para a disciplina de Banco de Dados.

## Troubleshooting

- **Erro de conexão com o banco no primeiro `up`:** o Postgres pode demorar alguns segundos para ficar saudável; o `node-container` já espera o `healthcheck` do banco (`depends_on: condition: service_healthy`), mas se ainda assim falhar, rode `docker compose up --build` novamente.
- **Comando `curl` "não reconhecido" ou travando no Windows:** você provavelmente está no PowerShell. Use `curl.exe` (sem aspas simples) ou troque para `Invoke-RestMethod`, conforme os exemplos acima.
- **Para zerar tudo e recomeçar:**

```bash
docker compose down -v
docker compose up --build
docker compose exec node-container node command.js migrate
docker compose exec node-container node command.js seed
```
