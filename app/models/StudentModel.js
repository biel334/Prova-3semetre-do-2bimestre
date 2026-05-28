import { DataTypes, Model } from 'sequelize';

class StudentModel extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,

            email: DataTypes.STRING

        }, {
            sequelize,
            tableName: 'students'
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.CourseModel, {
            through: models.StudentCourseModel,
            foreignKey: 'student_id',
            otherKey: 'course_id',
            as: 'courses'
        });
    }
}

export default StudentModel;