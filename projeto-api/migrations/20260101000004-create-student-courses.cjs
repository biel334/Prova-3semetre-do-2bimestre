module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_courses', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      student_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'students', key: 'id' } },
      course_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'courses', key: 'id' } },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface) { await queryInterface.dropTable('student_courses'); }
};