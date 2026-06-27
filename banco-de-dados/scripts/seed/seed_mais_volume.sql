-- Mais alunos (total final: 150 alunos)
INSERT INTO alunos (nome, email, curso, "createdAt", "updatedAt")
SELECT
  'Aluno ' || g,
  'aluno' || g || '@email.com',
  (ARRAY['Informática', 'Administração', 'Engenharia', 'Design'])[1 + (g % 4)],
  NOW(), NOW()
FROM generate_series(9, 150) AS g
ON CONFLICT DO NOTHING;

-- Notas para todos os alunos em todas as matérias (pula combinações que já existem)
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

-- Presenças para todos os alunos em várias datas
INSERT INTO presencas (aluno_id, data_aula, presente, "createdAt", "updatedAt")
SELECT
  a.id, d::date, random() > 0.15,
  NOW(), NOW()
FROM alunos a
CROSS JOIN generate_series('2026-05-01'::date, '2026-06-01'::date, '3 days'::interval) AS d
WHERE NOT EXISTS (
  SELECT 1 FROM presencas p WHERE p.aluno_id = a.id AND p.data_aula = d::date
);

-- Confirmação final
SELECT
  (SELECT COUNT(*) FROM alunos)      AS total_alunos,
  (SELECT COUNT(*) FROM materias)    AS total_materias,
  (SELECT COUNT(*) FROM professores) AS total_professores,
  (SELECT COUNT(*) FROM notas)       AS total_notas,
  (SELECT COUNT(*) FROM presencas)   AS total_presencas;
