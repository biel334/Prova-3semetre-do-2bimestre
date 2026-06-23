import { DataTypes, Model } from 'sequelize';

class NotaModel extends Model {
  static init(sequelize) {
    super.init({
      aluno_id: DataTypes.INTEGER,
      materia_id: DataTypes.INTEGER,
      nota: DataTypes.DECIMAL(4, 2)
    }, { sequelize, tableName: 'notas' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.AlunoModel, { foreignKey: 'aluno_id', as: 'aluno' });
    this.belongsTo(models.MateriaModel, { foreignKey: 'materia_id', as: 'materia' });
  }
}

export default NotaModel;
