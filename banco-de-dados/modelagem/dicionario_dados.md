# Dicionário de Dados — Sistema Escolar (Alunos, Matérias, Professores, Notas, Presenças)

## Tabela: `alunos`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| nome | VARCHAR(100) | NÃO | Nome do aluno |
| email | VARCHAR(100) | SIM | E-mail do aluno |
| curso | VARCHAR(100) | SIM | Curso em que o aluno está matriculado |

**Índices:** PK em `id`

---

## Tabela: `materias`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| nome | VARCHAR(100) | NÃO | Nome da matéria |

**Índices:** PK em `id`

---

## Tabela: `professores`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| nome | VARCHAR(100) | NÃO | Nome do professor |
| email | VARCHAR(100) | SIM | E-mail do professor |
| materia_id | INTEGER | SIM | FK → materias(id) — matéria lecionada pelo professor |

**Constraints:** FK `materia_id` → `materias(id)`
**Índices:** PK em `id`, B-Tree em `materia_id`

---

## Tabela: `notas` (Tabela Pivô — N:N entre alunos e matérias)

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| aluno_id | INTEGER | NÃO | FK → alunos(id) |
| materia_id | INTEGER | NÃO | FK → materias(id) |
| nota | DECIMAL(4,2) | SIM | Nota do aluno na matéria |

**Constraints:** FK `aluno_id` → `alunos(id)`, FK `materia_id` → `materias(id)`
**Índices:** PK em `id`, B-Tree em `aluno_id`, B-Tree em `materia_id`

---

## Tabela: `presencas`

| Coluna | Tipo | Nulo | Descrição |
|--------|------|------|-----------|
| id | SERIAL | NÃO | Chave primária |
| aluno_id | INTEGER | NÃO | FK → alunos(id) |
| data_aula | DATE | SIM | Data da aula registrada |
| presente | BOOLEAN | SIM | Indica se o aluno esteve presente |

**Constraints:** FK `aluno_id` → `alunos(id)`
**Índices:** PK em `id`, B-Tree em `aluno_id`

---

## Relacionamentos

- **professores → materias** (N:1): cada professor leciona uma matéria.
- **notas** é a tabela pivô que relaciona **alunos** e **materias** em N:N, com o atributo `nota`.
- **presencas → alunos** (N:1): cada registro de presença pertence a um aluno.
