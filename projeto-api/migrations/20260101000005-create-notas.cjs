module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notas', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      aluno_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'alunos', key: 'id' } },
      materia_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'materias', key: 'id' } },
      nota: { type: Sequelize.DECIMAL(4, 2) },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface) { await queryInterface.dropTable('notas'); }
};
