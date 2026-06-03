-- CREATE
INSERT INTO students(name,email)
VALUES ('Novo Aluno','[novo@aluno.com](mailto:novo@aluno.com)');

-- READ
SELECT * FROM students;

-- UPDATE
UPDATE students
SET name='Aluno Atualizado'
WHERE id=1;

-- DELETE
DELETE FROM students
WHERE id=1;
