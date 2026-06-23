import AlunoModel from '../models/AlunoModel.js';

class AlunoController {
  async index(req, res) {
    const alunos = await AlunoModel.findAll();
    return res.json(alunos);
  }
  async show(req, res) {
    const aluno = await AlunoModel.findByPk(req.params.id);
    return res.json(aluno);
  }
  async store(req, res) {
    const aluno = await AlunoModel.create(req.body);
    return res.json(aluno);
  }
  async update(req, res) {
    const aluno = await AlunoModel.findByPk(req.params.id);
    await aluno.update(req.body);
    return res.json(aluno);
  }
  async delete(req, res) {
    const aluno = await AlunoModel.findByPk(req.params.id);
    await aluno.destroy();
    return res.json({ message: 'Aluno deletado' });
  }
}

export default new AlunoController();
