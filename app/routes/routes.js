import { Router } from 'express';

import UserController from '../controllers/UserController.js';
import StudentController from '../controllers/StudentController.js';
import CourseController from '../controllers/CourseController.js';
import LoginController from '../controllers/LoginController.js';
import StudentCourseController from '../controllers/StudentCourseController.js';

import AuthMiddleware from '../middlewares/AuthMiddleware.js';

const routes = Router();

/*
    LOGIN
*/
routes.post('/login', LoginController.login);

/*
    USERS
*/
routes.post('/users', UserController.store);

/*
    ROTAS PROTEGIDAS
*/
routes.use(AuthMiddleware);

/*
    USERS
*/
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

/*
    STUDENTS
*/
routes.post('/student-courses', StudentCourseController.store);

routes.get('/student-courses', StudentCourseController.index);
routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.show);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

/*
    COURSES
*/
routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.show);
routes.post('/courses', CourseController.store);
routes.put('/courses/:id', CourseController.update);
routes.delete('/courses/:id', CourseController.delete);

export default routes;