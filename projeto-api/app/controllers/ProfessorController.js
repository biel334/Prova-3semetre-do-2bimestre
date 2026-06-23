import ProfessorModel from '../models/ProfessorModel.js';

class ProfessorController {
  async index(req, res) {
    const professores = await ProfessorModel.findAll();
    return res.json(professores);
  }
  async show(req, res) {
    const professor = await ProfessorModel.findByPk(req.params.id);
    return res.json(professor);
  }
  async store(req, res) {
    const professor = await ProfessorModel.create(req.body);
    return res.json(professor);
  }
  async update(req, res) {
    const professor = await ProfessorModel.findByPk(req.params.id);
    await professor.update(req.body);
    return res.json(professor);
  }
  async delete(req, res) {
    const professor = await ProfessorModel.findByPk(req.params.id);
    await professor.destroy();
    return res.json({ message: 'Professor deletado' });
  }
}

export default new ProfessorController();
