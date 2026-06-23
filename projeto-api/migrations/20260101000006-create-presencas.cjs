module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('presencas', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      aluno_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'alunos', key: 'id' } },
      data_aula: { type: Sequelize.DATEONLY },
      presente: { type: Sequelize.BOOLEAN },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface) { await queryInterface.dropTable('presencas'); }
};
