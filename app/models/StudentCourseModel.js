import { DataTypes, Model } from 'sequelize';

class StudentCourseModel extends Model {

    static init(sequelize) {
        super.init({

            student_id: DataTypes.INTEGER,

            course_id: DataTypes.INTEGER

        }, {
            sequelize,
            tableName: 'student_courses'
        });

        return this;
    }
}

export default StudentCourseModel;