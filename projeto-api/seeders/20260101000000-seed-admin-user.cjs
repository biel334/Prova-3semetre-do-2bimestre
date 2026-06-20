const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'admin@email.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', { email: 'admin@email.com' });
  }
};