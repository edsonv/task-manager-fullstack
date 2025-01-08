import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';
import { IncomingMessage } from 'node:http';

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT;

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(async () => {
    console.log('MongoDB connected');

    const { url } = await startStandaloneServer(server, {
      context: async ({ req }) => ({ req }),
      listen: {
        port,
      },
    });

    return url;
  })
  .then((res) => {
    console.log(`Server ready at ${res}`);
  });
