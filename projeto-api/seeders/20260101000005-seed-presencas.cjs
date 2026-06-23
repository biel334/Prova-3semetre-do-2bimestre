module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('presencas', [
      { aluno_id: 1, data_aula: '2026-06-16', presente: true, createdAt: now, updatedAt: now },
      { aluno_id: 2, data_aula: '2026-06-16', presente: true, createdAt: now, updatedAt: now },
      { aluno_id: 3, data_aula: '2026-06-16', presente: false, createdAt: now, updatedAt: now },
      { aluno_id: 4, data_aula: '2026-06-16', presente: true, createdAt: now, updatedAt: now },
      { aluno_id: 5, data_aula: '2026-06-16', presente: true, createdAt: now, updatedAt: now },
      { aluno_id: 6, data_aula: '2026-06-16', presente: false, createdAt: now, updatedAt: now },
      { aluno_id: 7, data_aula: '2026-06-16', presente: true, createdAt: now, updatedAt: now },
      { aluno_id: 8, data_aula: '2026-06-16', presente: true, createdAt: now, updatedAt: now }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('presencas', null, {});
  }
};
