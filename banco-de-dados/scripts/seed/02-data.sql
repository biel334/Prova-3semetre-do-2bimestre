INSERT INTO alunos (nome) VALUES 
('João'), ('Maria'), ('Carlos'), ('Ana'), ('Pedro');

INSERT INTO materias (nome) VALUES 
('Matemática'), ('História'), ('Português');

INSERT INTO professores (nome, materia_id) VALUES
('Prof. Ana', 1),
('Prof. Carlos', 2),
('Prof. João', 3);

INSERT INTO notas (aluno_id, materia_id, nota) VALUES
(1, 1, 8.5),
(2, 2, 7.0),
(3, 3, 9.0);

INSERT INTO presencas (aluno_id, materia_id, presente) VALUES
(1, 1, true),
(2, 2, true),
(3, 3, false);