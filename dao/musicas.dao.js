const { musica, genero, Sequelize } = require('../models')
const GenerosDao = require('./generos.dao')

exports.salvar = async data => {
  let entity
  if (data.id) {
    entity = await musica.findByPk(data.id)
    entity.nome = data.nome
    entity.artista = data.artista
    entity.ano = data.ano
    entity.generoId = data.generoId
  } else {
    entity = musica.build(data)
  }
  await entity.save()

  const genero = await GenerosDao.get(data.generoId)

  delete data.generoId
  return {
    ...data,
    genero
  }
}

exports.listar = async term => {
  const where = {
    [Sequelize.Op.or]: {
      nome: {
        [Sequelize.Op.like]: `%${term || ''}%`
      },
      artista: {
        [Sequelize.Op.like]: `%${term || ''}%`
      }
    }
  }

  const data = await musica.findAll({
    where,
    raw: true,
    include: [genero]
  })

  return data.map(musica => ({
    id: musica.id,
    nome: musica.nome,
    artista: musica.artista,
    ano: musica.ano,
    genero: {
      id: musica['genero.id'],
      descricao: musica['genero.descricao']
    }
  }))
}
