import PresencaModel from '../models/PresencaModel.js';

class PresencaController {
  async index(req, res) {
    const presencas = await PresencaModel.findAll();
    return res.json(presencas);
  }
  async show(req, res) {
    const presenca = await PresencaModel.findByPk(req.params.id);
    return res.json(presenca);
  }
  async store(req, res) {
    const presenca = await PresencaModel.create(req.body);
    return res.json(presenca);
  }
  async update(req, res) {
    const presenca = await PresencaModel.findByPk(req.params.id);
    await presenca.update(req.body);
    return res.json(presenca);
  }
  async delete(req, res) {
    const presenca = await PresencaModel.findByPk(req.params.id);
    await presenca.destroy();
    return res.json({ message: 'Presença deletada' });
  }
}

export default new PresencaController();
