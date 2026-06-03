cat > banco-de-dados/modelagem/dicionario_dados.md << 'EOF'
# Dicionário de Dados — Sistema de Gestão de Alunos e Cursos

## Tabela: `users`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| name | VARCHAR(255) | NÃO | Nome do usuário |
| email | VARCHAR(255) | NÃO | E-mail único (login) |
| password | VARCHAR(255) | NÃO | Senha criptografada (bcrypt) |
| createdAt | TIMESTAMP | NÃO | Data de criação |
| updatedAt | TIMESTAMP | NÃO | Data de atualização |

**Constraints:** UNIQUE(email)
**Índices:** PK em id, UNIQUE em email

---

## Tabela: `students`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| name | VARCHAR(255) | NÃO | Nome do aluno |
| email | VARCHAR(255) | NÃO | E-mail do aluno |
| createdAt | TIMESTAMP | NÃO | Data de criação |
| updatedAt | TIMESTAMP | NÃO | Data de atualização |

**Índices:** PK em id, B-Tree em email, B-Tree em name

---

## Tabela: `courses`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| title | VARCHAR(255) | NÃO | Título do curso |
| description | TEXT | NÃO | Descrição detalhada |
| createdAt | TIMESTAMP | NÃO | Data de criação |
| updatedAt | TIMESTAMP | NÃO | Data de atualização |

**Índices:** PK em id, B-Tree em title

---

## Tabela: `student_courses` (Tabela Pivô — N:N)

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| student_id | INTEGER | NÃO | FK → students(id) |
| course_id | INTEGER | NÃO | FK → courses(id) |
| createdAt | TIMESTAMP | NÃO | Data de matrícula |
| updatedAt | TIMESTAMP | NÃO | Data de atualização |

**Constraints:** FK student_id → students(id), FK course_id → courses(id), UNIQUE(student_id, course_id)
**Índices:** PK em id, B-Tree em student_id, B-Tree em course_id
EOF