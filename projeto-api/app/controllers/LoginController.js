import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UsuarioModel from '../models/UsuarioModel.js';

class LoginController {
  async login(req, res) {
    const { email, senha } = req.body;
    const usuario = await UsuarioModel.findOne({ where: { email } });
    if (!usuario) return res.status(401).json({ error: 'Usuário não encontrado' });

    const match = await bcrypt.compare(senha, usuario.senha);
    if (!match) return res.status(401).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token });
  }
}

export default new LoginController();
