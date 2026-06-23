import { DataTypes, Model } from 'sequelize';

class AlunoModel extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      curso: DataTypes.STRING
    }, { sequelize, tableName: 'alunos' });
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.MateriaModel, {
      through: models.NotaModel,
      foreignKey: 'aluno_id',
      otherKey: 'materia_id',
      as: 'materias'
    });
    this.hasMany(models.PresencaModel, { foreignKey: 'aluno_id', as: 'presencas' });
    this.hasMany(models.NotaModel, { foreignKey: 'aluno_id', as: 'notas' });
  }
}

export default AlunoModel;
