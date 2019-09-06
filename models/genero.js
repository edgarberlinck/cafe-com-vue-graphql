'use strict'
module.exports = (sequelize, DataTypes) => {
  const genero = sequelize.define(
    'genero',
    {
      descricao: DataTypes.STRING
    },
    {}
  )
  genero.associate = function (models) {
    genero.hasMany(models.musica)
  }
  return genero
}
