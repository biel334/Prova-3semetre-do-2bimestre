module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professores', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nome: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING },
      materia_id: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'materias', key: 'id' } },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface) { await queryInterface.dropTable('professores'); }
};
