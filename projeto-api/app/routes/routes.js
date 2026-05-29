import { Router } from 'express';

import UserController from '../controllers/UserController.js';
import StudentController from '../controllers/StudentController.js';
import CourseController from '../controllers/CourseController.js';
import LoginController from '../controllers/LoginController.js';
import StudentCourseController from '../controllers/StudentCourseController.js';

import AuthMiddleware from '../middlewares/AuthMiddleware.js';

const routes = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login e retorna token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: gabriel@email.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
routes.post('/login', LoginController.login);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Gabriel
 *               email:
 *                 type: string
 *                 example: gabriel@email.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 */
routes.post('/users', UserController.store);

routes.use(AuthMiddleware);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/users', UserController.index);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/users/:id', UserController.show);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.put('/users/:id', UserController.update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário removido
 *       401:
 *         description: Token inválido ou não informado
 */
routes.delete('/users/:id', UserController.delete);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alunos
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/students', StudentController.index);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Busca aluno por ID
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/students/:id', StudentController.show);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email]
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *     responses:
 *       200:
 *         description: Aluno criado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.post('/students', StudentController.store);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Atualiza aluno
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aluno atualizado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.put('/students/:id', StudentController.update);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Remove aluno
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno removido
 *       401:
 *         description: Token inválido ou não informado
 */
routes.delete('/students/:id', StudentController.delete);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cursos
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/courses', CourseController.index);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Busca curso por ID
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/courses/:id', CourseController.show);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Desenvolvimento Web
 *               description:
 *                 type: string
 *                 example: Curso completo de desenvolvimento web
 *     responses:
 *       200:
 *         description: Curso criado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.post('/courses', CourseController.store);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Atualiza curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Curso atualizado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.put('/courses/:id', CourseController.update);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Remove curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Curso removido
 *       401:
 *         description: Token inválido ou não informado
 */
routes.delete('/courses/:id', CourseController.delete);

/**
 * @swagger
 * /student-courses:
 *   post:
 *     summary: Vincula um aluno a um curso
 *     tags: [StudentCourses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [student_id, course_id]
 *             properties:
 *               student_id:
 *                 type: integer
 *                 example: 1
 *               course_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Curso vinculado ao aluno
 *       404:
 *         description: Aluno ou curso não encontrado
 *       401:
 *         description: Token inválido ou não informado
 */
routes.post('/student-courses', StudentCourseController.store);

/**
 * @swagger
 * /student-courses:
 *   get:
 *     summary: Lista alunos com seus cursos
 *     tags: [StudentCourses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alunos com cursos vinculados
 *       401:
 *         description: Token inválido ou não informado
 */
routes.get('/student-courses', StudentCourseController.index);

export default routes;