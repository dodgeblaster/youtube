const { GraphQLServerLambda } = require('graphql-yoga')
const resolvers = require('./src/resolvers')

const lambda = new GraphQLServerLambda({
  typeDefs: "./src/schema.graphql",
  resolvers
})

exports.server = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler