const { genero, Sequelize } = require('../models')

exports.listar = async descricao => {
  const where = {
    descricao: {
      [Sequelize.Op.like]: `%${descricao || ''}%`
    }
  }

  const data = await genero.findAll({ where, raw: true })
  return data
}

exports.get = async id => {
  const data = await genero.findByPk(id, { raw: true })
  return data
}
