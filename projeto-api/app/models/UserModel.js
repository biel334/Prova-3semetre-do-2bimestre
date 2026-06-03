import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

class UserModel extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, { sequelize, tableName: 'users' });

    this.beforeCreate(async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
    });

    return this;
  }
}

export default UserModel;