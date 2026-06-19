-- Script complementar de seed — gera mais registros para atingir o mínimo
-- de 100 registros relevantes exigido na avaliação.
-- Execute DEPOIS de já ter o escola.sql carregado (não dropa nada).

-- 1. Mais alunos (gera 50 alunos adicionais com cursos variados)
INSERT INTO alunos (nome, email, curso)
SELECT
  'Aluno ' || g,
  'aluno' || g || '@email.com',
  (ARRAY['Informática', 'Administração', 'Engenharia', 'Design'])[1 + (g % 4)]
FROM generate_series(9, 58) AS g;

-- 2. Notas para todos os alunos (existentes + novos) em todas as matérias
INSERT INTO notas (aluno_id, materia_id, nota)
SELECT
  a.id,
  m.id,
  ROUND((5 + random() * 5)::numeric, 2)  -- nota aleatória entre 5.00 e 10.00
FROM alunos a
CROSS JOIN materias m
WHERE a.id NOT IN (SELECT DISTINCT aluno_id FROM notas WHERE aluno_id = a.id AND materia_id = m.id)
LIMIT 300;

-- 3. Presenças para todos os alunos em várias datas de aula
INSERT INTO presencas (aluno_id, data_aula, presente)
SELECT
  a.id,
  d::date,
  random() > 0.15  -- ~85% de chance de presença
FROM alunos a
CROSS JOIN generate_series(
  '2026-05-01'::date,
  '2026-06-01'::date,
  '3 days'::interval
) AS d
LIMIT 300;

-- Confirmação rápida de volume (rode após o INSERT para conferir)
-- SELECT
--   (SELECT COUNT(*) FROM alunos) AS total_alunos,
--   (SELECT COUNT(*) FROM materias) AS total_materias,
--   (SELECT COUNT(*) FROM professores) AS total_professores,
--   (SELECT COUNT(*) FROM notas) AS total_notas,
--   (SELECT COUNT(*) FROM presencas) AS total_presencas;