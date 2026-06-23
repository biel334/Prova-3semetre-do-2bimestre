import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

class UsuarioModel extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING
    }, { sequelize, tableName: 'usuarios' });

    this.beforeCreate(async (usuario) => {
      usuario.senha = await bcrypt.hash(usuario.senha, 10);
    });

    return this;
  }
}

export default UsuarioModel;
