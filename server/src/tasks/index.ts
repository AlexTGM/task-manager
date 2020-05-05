import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs, resolvers
  })
});

server.listen({ port: 5002 }).then(({ url }) => {
  console.log(`🚀 Tasks server ready at ${url}`)
})