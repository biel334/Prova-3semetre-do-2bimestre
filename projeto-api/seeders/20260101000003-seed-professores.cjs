module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('professores', [
      { nome: 'Carlos Silva', email: 'carlos@escola.com', materia_id: 1, createdAt: now, updatedAt: now },
      { nome: 'Ana Souza', email: 'anasouza@escola.com', materia_id: 2, createdAt: now, updatedAt: now },
      { nome: 'Marcos Lima', email: 'marcos@escola.com', materia_id: 3, createdAt: now, updatedAt: now },
      { nome: 'Juliana Alves', email: 'juliana@escola.com', materia_id: 4, createdAt: now, updatedAt: now },
      { nome: 'Fernanda Costa', email: 'fernanda@escola.com', materia_id: 5, createdAt: now, updatedAt: now },
      { nome: 'Ricardo Souza', email: 'ricardo@escola.com', materia_id: 6, createdAt: now, updatedAt: now },
      { nome: 'Paulo Mendes', email: 'paulo@escola.com', materia_id: 7, createdAt: now, updatedAt: now },
      { nome: 'Lucas Pereira', email: 'lucasprof@escola.com', materia_id: 8, createdAt: now, updatedAt: now }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('professores', null, {});
  }
};
