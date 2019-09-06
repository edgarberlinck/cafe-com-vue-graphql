module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('musicas', 'generoId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'generos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },
  down: queryInterface => {
    return queryInterface.removeColumn('musicas', 'generoId')
  }
}
