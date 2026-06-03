import CourseModel from '../models/CourseModel.js';

class CourseController {
  async index(req, res) {
    const courses = await CourseModel.findAll();
    return res.json(courses);
  }
  async show(req, res) {
    const course = await CourseModel.findByPk(req.params.id);
    return res.json(course);
  }
  async store(req, res) {
    const course = await CourseModel.create(req.body);
    return res.json(course);
  }
  async update(req, res) {
    const course = await CourseModel.findByPk(req.params.id);
    await course.update(req.body);
    return res.json(course);
  }
  async delete(req, res) {
    const course = await CourseModel.findByPk(req.params.id);
    await course.destroy();
    return res.json({ message: 'Curso deletado' });
  }
}

export default new CourseController();