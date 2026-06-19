-- 1. Notas de cada aluno com o nome da matéria
SELECT
  a.nome AS aluno,
  m.nome AS materia,
  n.nota
FROM notas n
INNER JOIN alunos a ON a.id = n.aluno_id
INNER JOIN materias m ON m.id = n.materia_id
ORDER BY a.nome;

-- 2. Média de notas por matéria
SELECT
  m.nome AS materia,
  ROUND(AVG(n.nota), 2) AS media_notas
FROM materias m
LEFT JOIN notas n ON n.materia_id = m.id
GROUP BY m.id, m.nome
ORDER BY media_notas DESC;

-- 3. Frequência (percentual de presença) por aluno
SELECT
  a.nome AS aluno,
  COUNT(*) AS total_aulas,
  COUNT(*) FILTER (WHERE p.presente) AS presencas,
  ROUND(
    100.0 * COUNT(*) FILTER (WHERE p.presente) / COUNT(*), 2
  ) AS percentual_presenca
FROM presencas p
INNER JOIN alunos a ON a.id = p.aluno_id
GROUP BY a.id, a.nome
ORDER BY percentual_presenca DESC;

-- 4. Professores e suas respectivas matérias
SELECT
  p.nome AS professor,
  m.nome AS materia
FROM professores p
INNER JOIN materias m ON m.id = p.materia_id
ORDER BY m.nome;

-- 5. Alunos com nota abaixo de 7.0 (filtro de desempenho)
SELECT
  a.nome AS aluno,
  m.nome AS materia,
  n.nota
FROM notas n
INNER JOIN alunos a ON a.id = n.aluno_id
INNER JOIN materias m ON m.id = n.materia_id
WHERE n.nota < 7.0
ORDER BY n.nota ASC;