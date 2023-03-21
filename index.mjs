import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from "cors";
import bodyParser from "body-parser"
import express from "express"
import http from 'http';
import typeDefs from "./app/schema/index.js"
import resolvers from "./app/resolver/index.js"

const app =express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
typeDefs,
resolvers,
  });
  
  await server.start();
  app.use('/blog', cors(), bodyParser.json(), expressMiddleware(server));
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:4000/blog  🙋🙋`);