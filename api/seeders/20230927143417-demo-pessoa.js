'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
    {
      nome: 'Leonardo Fabricio',
      ativo: true,
      email:  'leonardofabricio207@gmail.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Alliny Benvindo',
      ativo: true,
      email: 'alliny.machado@globalhitss.com.br',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Caleb Silva',
      ativo: true,
      email: 'calebsilva@gmail,com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Karolliny Silva',
      ativo: true,
      email: 'karolsilva@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Jonathas Silva',
      ativo: true,
      email: 'jonathassilva@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Thiago Silva',
      ativo: true,
      email: 'thiagosilva@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Jackelliny Silva',
      ativo: true,
      email: 'jackellinysilva@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Lara Benvindo',
      ativo: true,
      email: 'larabenvindo@gmail.com',
      role: 'estudante', 
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Kariny Silva',
      ativo: false,
      email: 'karinysilva@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
