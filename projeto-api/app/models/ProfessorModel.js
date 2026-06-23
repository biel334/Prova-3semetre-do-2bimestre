import { DataTypes, Model } from 'sequelize';

class ProfessorModel extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      materia_id: DataTypes.INTEGER
    }, { sequelize, tableName: 'professores' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.MateriaModel, { foreignKey: 'materia_id', as: 'materia' });
  }
}

export default ProfessorModel;
