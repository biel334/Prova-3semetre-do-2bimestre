-- Média, maior e menor nota geral
SELECT
  ROUND(AVG(nota), 2) AS media_geral,
  MAX(nota) AS maior_nota,
  MIN(nota) AS menor_nota
FROM notas;

-- Quantidade de notas lançadas por matéria
SELECT
  m.nome AS materia,
  COUNT(n.id) AS total_notas
FROM materias m
LEFT JOIN notas n ON n.materia_id = m.id
GROUP BY m.id, m.nome
ORDER BY total_notas DESC;

-- Total de presenças e faltas por aluno
SELECT
  a.nome AS aluno,
  COUNT(*) FILTER (WHERE p.presente) AS total_presencas,
  COUNT(*) FILTER (WHERE NOT p.presente) AS total_faltas
FROM presencas p
INNER JOIN alunos a ON a.id = p.aluno_id
GROUP BY a.id, a.nome
ORDER BY total_faltas DESC;

-- Quantidade de alunos por curso
SELECT
  curso,
  COUNT(*) AS total_alunos
FROM alunos
GROUP BY curso
ORDER BY total_alunos DESC;

-- Quantidade de professores por matéria
SELECT
  m.nome AS materia,
  COUNT(p.id) AS total_professores
FROM materias m
LEFT JOIN professores p ON p.materia_id = m.id
GROUP BY m.id, m.nome
ORDER BY total_professores DESC;