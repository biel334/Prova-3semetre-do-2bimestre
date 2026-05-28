import UserModel from '../models/UserModel.js';

class UserController {

    async index(req, res) {

        const users = await UserModel.findAll();

        return res.json(users);

    }

    async show(req, res) {

        const user = await UserModel.findByPk(req.params.id);

        return res.json(user);

    }

    async store(req, res) {

        const user = await UserModel.create(req.body);

        return res.json(user);

    }

    async update(req, res) {

        const user = await UserModel.findByPk(req.params.id);

        await user.update(req.body);

        return res.json(user);

    }

    async delete(req, res) {

        const user = await UserModel.findByPk(req.params.id);

        await user.destroy();

        return res.json({
            message: 'Usuário deletado'
        });

    }

}

export default new UserController();