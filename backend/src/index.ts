import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express';
import { createServer } from 'http';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = createServer(app);

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: {
    port: process.env.PORT || 4000,
  },
});

console.log(`Server ready at ${url}`);
