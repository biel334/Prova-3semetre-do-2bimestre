# Arquitetura do Banco de Dados

## Escolha Tecnológica

Foi utilizado o PostgreSQL como banco de dados relacional (SQL).

A escolha foi realizada devido ao suporte a integridade referencial, transações ACID, alta confiabilidade, compatibilidade com Sequelize ORM e ampla utilização em aplicações web.

## Objetivo do Sistema

O sistema tem como objetivo gerenciar alunos, cursos e matrículas, permitindo o cadastro de usuários, alunos, cursos e o relacionamento entre alunos e cursos.

## Entidades Principais

* Users
* Students
* Courses
* Student_Courses

## Relacionamentos

Um aluno pode estar matriculado em vários cursos.

Um curso pode possuir vários alunos matriculados.

Para representar essa relação N:N foi utilizada a tabela intermediária `student_courses`.

## Volume de Dados

Foram cadastrados mais de 200 registros de teste para validação de consultas e desempenho.

## Principais Consultas

* Listagem de alunos
* Listagem de cursos
* Matrículas por curso
* Cursos de um aluno
* Relatórios agregados de matrículas
