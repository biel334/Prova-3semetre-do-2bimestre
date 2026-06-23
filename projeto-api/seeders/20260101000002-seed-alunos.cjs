module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('alunos', [
      { nome: 'Gabriel', email: 'gabriel@email.com', curso: 'Informática', createdAt: now, updatedAt: now },
      { nome: 'João', email: 'joao@email.com', curso: 'Administração', createdAt: now, updatedAt: now },
      { nome: 'Maria', email: 'maria@email.com', curso: 'Informática', createdAt: now, updatedAt: now },
      { nome: 'Pedro', email: 'pedro@email.com', curso: 'Administração', createdAt: now, updatedAt: now },
      { nome: 'Lucas', email: 'lucas@email.com', curso: 'Informática', createdAt: now, updatedAt: now },
      { nome: 'Ana', email: 'ana@email.com', curso: 'Administração', createdAt: now, updatedAt: now },
      { nome: 'Bruno', email: 'bruno@email.com', curso: 'Informática', createdAt: now, updatedAt: now },
      { nome: 'Carla', email: 'carla@email.com', curso: 'Administração', createdAt: now, updatedAt: now }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('alunos', null, {});
  }
};
