'use strict'
module.exports = (sequelize, DataTypes) => {
  const musica = sequelize.define(
    'musica',
    {
      nome: DataTypes.STRING,
      artista: DataTypes.STRING,
      ano: DataTypes.INTEGER
    },
    {}
  )
  musica.associate = function (models) {
    musica.belongsTo(models.genero)
  }
  return musica
}
