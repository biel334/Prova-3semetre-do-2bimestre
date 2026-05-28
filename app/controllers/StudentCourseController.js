import StudentModel from '../models/StudentModel.js';
import CourseModel from '../models/CourseModel.js';

class StudentCourseController {

    async store(req, res) {

        const { student_id, course_id } = req.body;

        const student = await StudentModel.findByPk(student_id);

        const course = await CourseModel.findByPk(course_id);

        if (!student || !course) {

            return res.status(404).json({
                error: 'Aluno ou curso não encontrado'
            });

        }

        await student.addCourse(course);

        return res.json({
            message: 'Curso vinculado ao aluno'
        });

    }

    async index(req, res) {

        const students = await StudentModel.findAll({
            include: {
                model: CourseModel,
                as: 'courses',
                through: {
                    attributes: []
                }
            }
        });

        return res.json(students);

    }

}

export default new StudentCourseController();