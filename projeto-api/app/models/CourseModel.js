import { DataTypes, Model } from 'sequelize';

class CourseModel extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    }, { sequelize, tableName: 'courses' });
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.StudentModel, {
      through: models.StudentCourseModel,
      foreignKey: 'course_id',
      otherKey: 'student_id',
      as: 'students'
    });
  }
}

export default CourseModel;