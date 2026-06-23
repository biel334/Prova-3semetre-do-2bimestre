import UsuarioModel from '../models/UsuarioModel.js';

class UsuarioController {
  async index(req, res) {
    const usuarios = await UsuarioModel.findAll({ attributes: { exclude: ['senha'] } });
    return res.json(usuarios);
  }
  async show(req, res) {
    const usuario = await UsuarioModel.findByPk(req.params.id, { attributes: { exclude: ['senha'] } });
    return res.json(usuario);
  }
  async store(req, res) {
    const usuario = await UsuarioModel.create(req.body);
    return res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
  }
  async update(req, res) {
    const usuario = await UsuarioModel.findByPk(req.params.id);
    await usuario.update(req.body);
    return res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
  }
  async delete(req, res) {
    const usuario = await UsuarioModel.findByPk(req.params.id);
    await usuario.destroy();
    return res.json({ message: 'Usuário deletado' });
  }
}

export default new UsuarioController();
