import StudentModel from '../models/StudentModel.js';

class StudentController {

    async index(req, res) {

        const students = await StudentModel.findAll();

        return res.json(students);

    }

    async show(req, res) {

        const student = await StudentModel.findByPk(req.params.id);

        return res.json(student);

    }

    async store(req, res) {

        const student = await StudentModel.create(req.body);

        return res.json(student);

    }

    async update(req, res) {

        const student = await StudentModel.findByPk(req.params.id);

        await student.update(req.body);

        return res.json(student);

    }

    async delete(req, res) {

        const student = await StudentModel.findByPk(req.params.id);

        await student.destroy();

        return res.json({
            message: 'Aluno deletado'
        });

    }

}

export default new StudentController();