# Prova-3semetre-
# Prova do 2º Bimestre 
# Desenvolvimento Web

## Descrição do sistema

Este projeto consiste em uma API REST desenvolvida com Node.js, Express, Sequelize e PostgreSQL.

A aplicação permite:

* Cadastro de usuários
* Login com autenticação JWT
* Cadastro de alunos
* Cadastro de cursos
* Relacionamento entre alunos e cursos

O sistema utiliza autenticação JWT para proteger as rotas da aplicação.

---

# Tecnologias utilizadas

* Node.js 24
* Express
* PostgreSQL 17
* Sequelize ORM
* JWT (jsonwebtoken)
* bcrypt
* Docker
* Docker Compose
* Nginx
* Swagger

---

# Estrutura do banco de dados

O sistema possui 4 tabelas:

## users

Tabela responsável pelos usuários do sistema.

Campos:

* id
* name
* email (único)
* password (criptografada com bcrypt)

---

## students

Tabela responsável pelos alunos.

Campos:

* id
* name
* email

---

## courses

Tabela responsável pelos cursos.

Campos:

* id
* title
* description

---

## student_courses

Tabela pivô responsável pelo relacionamento N:N entre alunos e cursos.

Campos:

* id
* student_id
* course_id

---

# Relacionamentos

O sistema possui uma relação N:N:

* Um aluno pode possuir vários cursos
* Um curso pode possuir vários alunos

A tabela pivô utilizada é:

```text
student_courses
```

---

# Rotas da API

## Login

### POST /login

Realiza autenticação e retorna um token JWT.

---

# Users

## GET /users

Lista usuários

## GET /users/:id

Busca usuário por ID

## POST /users

Cria usuário

## PUT /users/:id

Atualiza usuário

## DELETE /users/:id

Remove usuário

---

# Students

## GET /students

Lista alunos

## GET /students/:id

Busca aluno por ID

## POST /students

Cria aluno

## PUT /students/:id

Atualiza aluno

## DELETE /students/:id

Remove aluno

---

# Courses

## GET /courses

Lista cursos

## GET /courses/:id

Busca curso por ID

## POST /courses

Cria curso

## PUT /courses/:id

Atualiza curso

## DELETE /courses/:id

Remove curso

---

# Student Courses

## POST /student-courses

Relaciona aluno com curso

## GET /student-courses

Lista alunos com cursos

---

# Middleware

O sistema utiliza um middleware de autenticação JWT.

Middleware:

```text
AuthMiddleware.js
```

Todas as rotas são protegidas, exceto:

```text
POST /login
POST /users
```

---

# Autenticação JWT

Para acessar as rotas protegidas, é necessário:

1. Criar um usuário
2. Fazer login
3. Utilizar o token JWT no Authorization Header

Exemplo:

```bash
Authorization: Bearer SEU_TOKEN
```

---

# Swagger

A documentação Swagger está disponível em:

```text
/api-docs/
```

Exemplo:

```text
http://localhost:8080/api-docs/
```

---

# Containers utilizados

O projeto utiliza os seguintes containers:

* PostgreSQL
* Node.js Web Server
* Nginx Reverse Proxy

Arquitetura:

```text
Host -> Nginx -> Node.js -> PostgreSQL
```

---

# Como executar o projeto

## Subir containers

```bash
docker compose up --build
```

---

# Como executar migrations

```bash
docker compose exec node-container npx sequelize-cli db:migrate
```

---

# Como testar login

## Criar usuário

```bash
curl -X POST http://localhost:8080/users \
-H "Content-Type: application/json" \
-d '{"name":"Gabriel","email":"gabriel@email.com","password":"123456"}'
```

---

## Fazer login

```bash
curl -X POST http://localhost:8080/login \
-H "Content-Type: application/json" \
-d '{"email":"gabriel@email.com","password":"123456"}'
```

---

# Como usar token JWT

Exemplo:

```bash
curl http://localhost:8080/students \
-H "Authorization: Bearer SEU_TOKEN"
```

---

# Observações

O servidor Node.js permanece privado dentro da rede Docker.

O acesso externo ocorre apenas através do Nginx funcionando como proxy reverso.
