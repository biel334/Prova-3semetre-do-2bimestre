import Sequelize from 'sequelize';
import UserModel from '../app/models/UserModel.js';
import StudentModel from '../app/models/StudentModel.js';
import CourseModel from '../app/models/CourseModel.js';
import StudentCourseModel from '../app/models/StudentCourseModel.js';

const connection = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  define: { timestamps: true }
});

UserModel.init(connection);
StudentModel.init(connection);
CourseModel.init(connection);
StudentCourseModel.init(connection);

StudentModel.associate({ CourseModel, StudentCourseModel });
CourseModel.associate({ StudentModel, StudentCourseModel });

export default connection;