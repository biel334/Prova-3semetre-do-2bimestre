# Arquitetura do Banco de Dados

## Escolha Tecnológica

Foi utilizado o PostgreSQL como banco de dados relacional (SQL).

A escolha se justifica pelo suporte a integridade referencial, transações ACID,
alta confiabilidade e ampla utilização em aplicações web de gestão de dados
estruturados, como é o caso de um sistema escolar.

## Objetivo do Sistema

O sistema tem como objetivo gerenciar o cadastro de alunos, matérias e
professores, além de registrar as notas e a frequência (presença) dos alunos
em cada matéria.

## Entidades Principais

* Alunos
* Matérias
* Professores
* Notas
* Presenças

## Relacionamentos

* Um professor leciona uma matéria (`professores.materia_id` → `materias.id`).
* Um aluno pode ter várias notas, uma por matéria (`notas.aluno_id` →
  `alunos.id`, `notas.materia_id` → `materias.id`).
* Um aluno pode ter vários registros de presença, um por data de aula
  (`presencas.aluno_id` → `alunos.id`).

Todos os relacionamentos do schema atual são do tipo 1:N (um aluno tem várias
notas/presenças; uma matéria tem vários professores ou notas associadas). Não
há, neste momento, relacionamento N:N no `escola.sql`.

## Volume de Dados

Atualmente o banco possui 8 registros por tabela (alunos, matérias,
professores, notas, presenças). **Atenção:** o critério da avaliação exige um
mínimo de 100 registros relevantes para permitir análise de performance —
use o script de seed adicional para popular o banco com mais dados antes da
entrega.

## Principais Consultas

* Notas de cada aluno por matéria
* Média de notas por matéria
* Frequência (presença) por aluno
* Professores e suas respectivas matérias
* Alunos com média abaixo de um valor de corte