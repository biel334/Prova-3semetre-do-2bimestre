CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    materia_id INT REFERENCES materias(id)
);

CREATE TABLE notas (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES alunos(id),
    materia_id INT REFERENCES materias(id),
    nota DECIMAL(4,2)
);

CREATE TABLE presencas (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES alunos(id),
    materia_id INT REFERENCES materias(id),
    presente BOOLEAN
);