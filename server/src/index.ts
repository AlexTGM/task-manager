import { makeExecutableSchema } from 'graphql-tools';

import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
type Query {
  hello(name: String!): String
}
`;

const resolvers = {
  Query: {
    hello: (_, { name }: { name: string}): string => 
      `Hello, ${name}`, 
  }
};

const schema = makeExecutableSchema({
  typeDefs, resolvers
});

const server = new ApolloServer({schema});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});