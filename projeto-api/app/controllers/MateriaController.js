import MateriaModel from '../models/MateriaModel.js';

class MateriaController {
  async index(req, res) {
    const materias = await MateriaModel.findAll();
    return res.json(materias);
  }
  async show(req, res) {
    const materia = await MateriaModel.findByPk(req.params.id);
    return res.json(materia);
  }
  async store(req, res) {
    const materia = await MateriaModel.create(req.body);
    return res.json(materia);
  }
  async update(req, res) {
    const materia = await MateriaModel.findByPk(req.params.id);
    await materia.update(req.body);
    return res.json(materia);
  }
  async delete(req, res) {
    const materia = await MateriaModel.findByPk(req.params.id);
    await materia.destroy();
    return res.json({ message: 'Matéria deletada' });
  }
}

export default new MateriaController();
