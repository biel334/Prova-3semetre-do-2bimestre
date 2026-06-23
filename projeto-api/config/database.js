import Sequelize from 'sequelize';
import UsuarioModel from '../app/models/UsuarioModel.js';
import AlunoModel from '../app/models/AlunoModel.js';
import MateriaModel from '../app/models/MateriaModel.js';
import ProfessorModel from '../app/models/ProfessorModel.js';
import NotaModel from '../app/models/NotaModel.js';
import PresencaModel from '../app/models/PresencaModel.js';

const connection = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  define: { timestamps: true }
});

UsuarioModel.init(connection);
AlunoModel.init(connection);
MateriaModel.init(connection);
ProfessorModel.init(connection);
NotaModel.init(connection);
PresencaModel.init(connection);

const models = { AlunoModel, MateriaModel, ProfessorModel, NotaModel, PresencaModel };

AlunoModel.associate(models);
MateriaModel.associate(models);
ProfessorModel.associate(models);
NotaModel.associate(models);
PresencaModel.associate(models);

export default connection;
