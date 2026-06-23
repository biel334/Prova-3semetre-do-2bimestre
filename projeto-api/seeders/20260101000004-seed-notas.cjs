module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('notas', [
      { aluno_id: 1, materia_id: 1, nota: 9.50, createdAt: now, updatedAt: now },
      { aluno_id: 2, materia_id: 2, nota: 8.00, createdAt: now, updatedAt: now },
      { aluno_id: 3, materia_id: 3, nota: 7.50, createdAt: now, updatedAt: now },
      { aluno_id: 4, materia_id: 4, nota: 9.00, createdAt: now, updatedAt: now },
      { aluno_id: 5, materia_id: 5, nota: 8.50, createdAt: now, updatedAt: now },
      { aluno_id: 6, materia_id: 6, nota: 7.00, createdAt: now, updatedAt: now },
      { aluno_id: 7, materia_id: 7, nota: 10.00, createdAt: now, updatedAt: now },
      { aluno_id: 8, materia_id: 8, nota: 9.20, createdAt: now, updatedAt: now },
      { aluno_id: 1, materia_id: 8, nota: 8.80, createdAt: now, updatedAt: now },
      { aluno_id: 2, materia_id: 1, nota: 6.50, createdAt: now, updatedAt: now }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('notas', null, {});
  }
};
