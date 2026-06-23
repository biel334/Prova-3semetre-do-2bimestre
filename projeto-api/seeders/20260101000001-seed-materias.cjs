module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('materias', [
      { nome: 'Matemática', createdAt: now, updatedAt: now },
      { nome: 'Português', createdAt: now, updatedAt: now },
      { nome: 'História', createdAt: now, updatedAt: now },
      { nome: 'Geografia', createdAt: now, updatedAt: now },
      { nome: 'Ciências', createdAt: now, updatedAt: now },
      { nome: 'Inglês', createdAt: now, updatedAt: now },
      { nome: 'Educação Física', createdAt: now, updatedAt: now },
      { nome: 'Informática', createdAt: now, updatedAt: now }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('materias', null, {});
  }
};
