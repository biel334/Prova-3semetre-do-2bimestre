-- DDL completo do sistema de Gestao de Alunos e Cursos
-- PostgreSQL 17

DROP TABLE IF EXISTS student_courses CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Tabela: users
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    password    VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_users_email UNIQUE (email)
);

-- Tabela: students
CREATE TABLE students (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Tabela: courses
CREATE TABLE courses (
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Tabela Pivo: student_courses (relacao N:N)
CREATE TABLE student_courses (
    id          SERIAL PRIMARY KEY,
    student_id  INTEGER NOT NULL,
    course_id   INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_sc_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_sc_course  FOREIGN KEY (course_id)  REFERENCES courses(id)  ON DELETE CASCADE,
    CONSTRAINT uq_sc_enrollment UNIQUE (student_id, course_id)
);

-- Indices
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_students_name  ON students(name);
CREATE INDEX idx_courses_title  ON courses(title);
CREATE INDEX idx_sc_student_id  ON student_courses(student_id);
CREATE INDEX idx_sc_course_id   ON student_courses(course_id);