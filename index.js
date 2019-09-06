const { GraphQLServer } = require('graphql-yoga')
const { GenerosDao, MusicasDao } = require('./dao')
const typeDefs = './schema.graphql'

const resolvers = {
  Query: {
    listarGeneros: (root, { descricao }) => GenerosDao.listar(descricao),
    listarMusicas: (root, { term }) => MusicasDao.listar(term)
  },
  Mutation: {
    salvarMusica: (root, params) => MusicasDao.salvar(params),
    removerMusica: (root, { id }) => MusicasDao.remover(id)
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost: 4000'))
