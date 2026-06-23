import { DataTypes, Model } from 'sequelize';

class MateriaModel extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, { sequelize, tableName: 'materias' });
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.AlunoModel, {
      through: models.NotaModel,
      foreignKey: 'materia_id',
      otherKey: 'aluno_id',
      as: 'alunos'
    });
    this.hasMany(models.ProfessorModel, { foreignKey: 'materia_id', as: 'professores' });
  }
}

export default MateriaModel;
