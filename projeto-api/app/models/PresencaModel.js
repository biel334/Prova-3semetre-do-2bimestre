import { DataTypes, Model } from 'sequelize';

class PresencaModel extends Model {
  static init(sequelize) {
    super.init({
      aluno_id: DataTypes.INTEGER,
      data_aula: DataTypes.DATEONLY,
      presente: DataTypes.BOOLEAN
    }, { sequelize, tableName: 'presencas' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.AlunoModel, { foreignKey: 'aluno_id', as: 'aluno' });
  }
}

export default PresencaModel;
