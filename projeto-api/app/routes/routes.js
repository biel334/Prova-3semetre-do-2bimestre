import { Router } from 'express';

import UsuarioController from '../controllers/UsuarioController.js';
import AlunoController from '../controllers/AlunoController.js';
import MateriaController from '../controllers/MateriaController.js';
import ProfessorController from '../controllers/ProfessorController.js';
import NotaController from '../controllers/NotaController.js';
import PresencaController from '../controllers/PresencaController.js';
import LoginController from '../controllers/LoginController.js';

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
 *             required: [email, senha]
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@email.com
 *               senha:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
routes.post('/login', LoginController.login);

routes.use(AuthMiddleware);

/* ===================== USUARIOS ===================== */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuarios]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de usuários }
 *       401: { description: Token inválido ou não informado }
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, email, senha]
 *             properties:
 *               nome: { type: string, example: Gabriel }
 *               email: { type: string, example: gabriel@email.com }
 *               senha: { type: string, example: "123456" }
 *     responses:
 *       200: { description: Usuário criado com sucesso }
 *       401: { description: Token inválido ou não informado }
 */
routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags: [Usuarios]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Usuário encontrado }
 *   put:
 *     summary: Atualiza usuário
 *     tags: [Usuarios]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               email: { type: string }
 *               senha: { type: string }
 *     responses:
 *       200: { description: Usuário atualizado }
 *   delete:
 *     summary: Remove usuário
 *     tags: [Usuarios]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Usuário removido }
 */
routes.get('/usuarios/:id', UsuarioController.show);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

/* ===================== ALUNOS ===================== */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de alunos }
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome]
 *             properties:
 *               nome: { type: string, example: João Silva }
 *               email: { type: string, example: joao@email.com }
 *               curso: { type: string, example: Informática }
 *     responses:
 *       200: { description: Aluno criado }
 */
routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.store);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Busca aluno por ID
 *     tags: [Alunos]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Aluno encontrado }
 *   put:
 *     summary: Atualiza aluno
 *     tags: [Alunos]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Aluno atualizado }
 *   delete:
 *     summary: Remove aluno
 *     tags: [Alunos]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Aluno removido }
 */
routes.get('/alunos/:id', AlunoController.show);
routes.put('/alunos/:id', AlunoController.update);
routes.delete('/alunos/:id', AlunoController.delete);

/* ===================== MATERIAS ===================== */

/**
 * @swagger
 * /materias:
 *   get:
 *     summary: Lista todas as matérias
 *     tags: [Materias]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de matérias }
 *   post:
 *     summary: Cria uma nova matéria
 *     tags: [Materias]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome]
 *             properties:
 *               nome: { type: string, example: Matemática }
 *     responses:
 *       200: { description: Matéria criada }
 */
routes.get('/materias', MateriaController.index);
routes.post('/materias', MateriaController.store);

/**
 * @swagger
 * /materias/{id}:
 *   get:
 *     summary: Busca matéria por ID
 *     tags: [Materias]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Matéria encontrada }
 *   put:
 *     summary: Atualiza matéria
 *     tags: [Materias]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Matéria atualizada }
 *   delete:
 *     summary: Remove matéria
 *     tags: [Materias]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Matéria removida }
 */
routes.get('/materias/:id', MateriaController.show);
routes.put('/materias/:id', MateriaController.update);
routes.delete('/materias/:id', MateriaController.delete);

/* ===================== PROFESSORES ===================== */

/**
 * @swagger
 * /professores:
 *   get:
 *     summary: Lista todos os professores
 *     tags: [Professores]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de professores }
 *   post:
 *     summary: Cria um novo professor
 *     tags: [Professores]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome]
 *             properties:
 *               nome: { type: string, example: Carlos Silva }
 *               email: { type: string, example: carlos@escola.com }
 *               materia_id: { type: integer, example: 1 }
 *     responses:
 *       200: { description: Professor criado }
 */
routes.get('/professores', ProfessorController.index);
routes.post('/professores', ProfessorController.store);

/**
 * @swagger
 * /professores/{id}:
 *   get:
 *     summary: Busca professor por ID
 *     tags: [Professores]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Professor encontrado }
 *   put:
 *     summary: Atualiza professor
 *     tags: [Professores]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Professor atualizado }
 *   delete:
 *     summary: Remove professor
 *     tags: [Professores]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Professor removido }
 */
routes.get('/professores/:id', ProfessorController.show);
routes.put('/professores/:id', ProfessorController.update);
routes.delete('/professores/:id', ProfessorController.delete);

/* ===================== PRESENCAS ===================== */

/**
 * @swagger
 * /presencas:
 *   get:
 *     summary: Lista todas as presenças
 *     tags: [Presencas]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de presenças }
 *   post:
 *     summary: Registra uma presença
 *     tags: [Presencas]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [aluno_id, data_aula, presente]
 *             properties:
 *               aluno_id: { type: integer, example: 1 }
 *               data_aula: { type: string, example: "2026-06-16" }
 *               presente: { type: boolean, example: true }
 *     responses:
 *       200: { description: Presença registrada }
 */
routes.get('/presencas', PresencaController.index);
routes.post('/presencas', PresencaController.store);

/**
 * @swagger
 * /presencas/{id}:
 *   get:
 *     summary: Busca presença por ID
 *     tags: [Presencas]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Presença encontrada }
 *   put:
 *     summary: Atualiza presença
 *     tags: [Presencas]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Presença atualizada }
 *   delete:
 *     summary: Remove presença
 *     tags: [Presencas]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Presença removida }
 */
routes.get('/presencas/:id', PresencaController.show);
routes.put('/presencas/:id', PresencaController.update);
routes.delete('/presencas/:id', PresencaController.delete);

/* ===================== NOTAS (pivô N:N aluno<->materia) ===================== */

/**
 * @swagger
 * /notas:
 *   get:
 *     summary: Lista todas as notas (vínculos aluno-matéria)
 *     tags: [Notas]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de notas }
 *   post:
 *     summary: Lança uma nota vinculando aluno e matéria
 *     tags: [Notas]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [aluno_id, materia_id, nota]
 *             properties:
 *               aluno_id: { type: integer, example: 1 }
 *               materia_id: { type: integer, example: 1 }
 *               nota: { type: number, example: 9.5 }
 *     responses:
 *       200: { description: Nota lançada com sucesso }
 *       404: { description: Aluno ou matéria não encontrado }
 */
routes.get('/notas', NotaController.index);
routes.post('/notas', NotaController.store);

/**
 * @swagger
 * /notas/{id}:
 *   get:
 *     summary: Busca nota por ID
 *     tags: [Notas]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Nota encontrada }
 *   put:
 *     summary: Atualiza uma nota
 *     tags: [Notas]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Nota atualizada }
 *   delete:
 *     summary: Remove o vínculo de nota entre aluno e matéria
 *     tags: [Notas]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Nota removida }
 *       404: { description: Nota não encontrada }
 */
routes.get('/notas/:id', NotaController.show);
routes.put('/notas/:id', NotaController.update);
routes.delete('/notas/:id', NotaController.delete);

/**
 * @swagger
 * /alunos-materias:
 *   get:
 *     summary: Lista alunos com as matérias vinculadas (visão da relação N:N)
 *     tags: [Notas]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Lista de alunos com suas matérias e notas }
 */
routes.get('/alunos-materias', NotaController.alunosComMaterias);

export default routes;
