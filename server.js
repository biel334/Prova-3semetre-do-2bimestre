import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import './config/database.js';

import routes from './app/routes/routes.js';

import swaggerOptions from './swagger.js';

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();

app.use(cors());

app.use(express.json());

/*
    SWAGGER
*/
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

/*
    ROTAS
*/
app.use(routes);

app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');

});