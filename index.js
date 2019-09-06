const { GraphQLServer } = require('graphql-yoga')
const { GenerosDao } = require('./dao')
const typeDefs = './schema.graphql'

const resolvers = {
  Query: {
    listarGeneros: (root, { descricao }) => GenerosDao.listar(descricao)
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost: 4000'))
