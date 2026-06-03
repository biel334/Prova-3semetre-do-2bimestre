SELECT
s.name,
c.title
FROM students s
INNER JOIN student_courses sc
ON s.id = sc.student_id
INNER JOIN courses c
ON c.id = sc.course_id;

SELECT
c.title,
COUNT(sc.id) AS total_matriculas
FROM courses c
LEFT JOIN student_courses sc
ON c.id = sc.course_id
GROUP BY c.id, c.title;

SELECT *
FROM students
WHERE name ILIKE '%Ana%';

SELECT *
FROM courses
ORDER BY title;

SELECT
s.name,
COUNT(sc.id) AS cursos_matriculados
FROM students s
LEFT JOIN student_courses sc
ON s.id = sc.student_id
GROUP BY s.id, s.name;
