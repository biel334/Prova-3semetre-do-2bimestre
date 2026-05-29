import Sequelize from 'sequelize';
import UserModel from '../app/models/UserModel.js';
import StudentModel from '../app/models/StudentModel.js';
import CourseModel from '../app/models/CourseModel.js';
import StudentCourseModel from '../app/models/StudentCourseModel.js';

const connection = new Sequelize({
  dialect: 'postgres',
  host: 'postgres-container',
  username: 'postgres',
  password: 'postgres',
  database: 'api_rest_db',
  port: 5432,
  define: { timestamps: true }
});

UserModel.init(connection);
StudentModel.init(connection);
CourseModel.init(connection);
StudentCourseModel.init(connection);

StudentModel.associate({ CourseModel, StudentCourseModel });
CourseModel.associate({ StudentModel, StudentCourseModel });

export default connection;