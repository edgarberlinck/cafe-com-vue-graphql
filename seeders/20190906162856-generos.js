'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('generos', [
      {
        descricao: 'Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Punk Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Heavy Metal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { descricao: 'Pancadão', createdAt: new Date(), updatedAt: new Date() },
      {
        descricao: 'Swigueira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { descricao: 'Axé', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Pagode', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('generos', null, {})
  }
}
