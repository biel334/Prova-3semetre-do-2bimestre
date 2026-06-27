CREATE INDEX IF NOT EXISTS idx_alunos_email ON alunos(email);
CREATE INDEX IF NOT EXISTS idx_alunos_curso ON alunos(curso);
CREATE INDEX IF NOT EXISTS idx_notas_aluno_id ON notas(aluno_id);
CREATE INDEX IF NOT EXISTS idx_notas_materia_id ON notas(materia_id);
CREATE INDEX IF NOT EXISTS idx_presencas_aluno_id ON presencas(aluno_id);
CREATE INDEX IF NOT EXISTS idx_presencas_data_aula ON presencas(data_aula);
CREATE INDEX IF NOT EXISTS idx_professores_materia_id ON professores(materia_id);
