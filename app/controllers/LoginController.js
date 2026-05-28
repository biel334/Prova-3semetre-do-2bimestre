import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/UserModel.js';

class LoginController {
    async login(req, res) {
        const { email, password } = req.body;

        const user = await UserModel.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                error: 'Usuário não encontrado'
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                error: 'Senha inválida'
            });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.json({ token });
    }
}

export default new LoginController();