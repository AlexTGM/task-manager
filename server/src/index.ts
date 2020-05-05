import {
  mergeSchemas,
  delegateToSchema,
  makeRemoteExecutableSchema,
  introspectSchema,
} from 'graphql-tools';

import { HttpLink } from 'apollo-link-http';
import fetch from 'cross-fetch';

import { ApolloServer, gql } from 'apollo-server';

const linkTypeDefs = gql`
  extend type Project {
    tasks: [Task]
  }
`;

const projectsLink = new HttpLink({ uri: 'http://localhost:5001/graphql', fetch });
const tasksLink = new HttpLink({ uri: 'http://localhost:5002/graphql', fetch });

(async () => {
  const projectsSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(projectsLink),
    link: projectsLink
  })

  const tasksSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(tasksLink),
    link: tasksLink
  })

  const schema = mergeSchemas({
    subschemas: [
      { schema: projectsSchema },
      { schema: tasksSchema }
    ],
    typeDefs: linkTypeDefs,
    resolvers: {
      Project: {
        tasks: {
          fragment: `... on Project { tasksIds }`,
          resolve(parent, args, context, info) {
            return delegateToSchema({
              schema: tasksSchema,
              operation: 'query',
              fieldName: 'findTasksByIds',
              args: {
                ids: parent.tasksIds
              },
              context,
              info
            })
          }
        }
      }
    }
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });
})();