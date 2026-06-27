-- Resincroniza as sequences (corrige o erro de duplicate key)
SELECT setval('alunos_id_seq', (SELECT MAX(id) FROM alunos));
SELECT setval('materias_id_seq', (SELECT MAX(id) FROM materias));
SELECT setval('professores_id_seq', (SELECT MAX(id) FROM professores));
SELECT setval('notas_id_seq', (SELECT MAX(id) FROM notas));

-- Completa as notas que faltaram
INSERT INTO notas (aluno_id, materia_id, nota, "createdAt", "updatedAt")
SELECT
  a.id, m.id,
  ROUND((5 + random() * 5)::numeric, 2),
  NOW(), NOW()
FROM alunos a
CROSS JOIN materias m
WHERE NOT EXISTS (
  SELECT 1 FROM notas n WHERE n.aluno_id = a.id AND n.materia_id = m.id
);

-- Completa as presenças que faltaram (SEM createdAt/updatedAt)
INSERT INTO presencas (aluno_id, data_aula, presente)
SELECT
  a.id, d::date, random() > 0.15
FROM alunos a
CROSS JOIN generate_series('2026-05-01'::date, '2026-06-01'::date, '3 days'::interval) AS d
WHERE NOT EXISTS (
  SELECT 1 FROM presencas p WHERE p.aluno_id = a.id AND p.data_aula = d::date
);

SELECT
  (SELECT COUNT(*) FROM alunos)      AS total_alunos,
  (SELECT COUNT(*) FROM materias)    AS total_materias,
  (SELECT COUNT(*) FROM professores) AS total_professores,
  (SELECT COUNT(*) FROM notas)       AS total_notas,
  (SELECT COUNT(*) FROM presencas)   AS total_presencas;
