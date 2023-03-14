const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schema");
const resolvers = require("../resolver");
const { applyMiddleware } = require("graphql-middleware");
const { makeExecutableSchema } = require("graphql-tools");
const { authenticate } = require("../utils/auth");
require("dotenv").config();

const server = new ApolloServer({
  schema: applyMiddleware(
    makeExecutableSchema({ typeDefs, resolvers }),
    authenticate
  ),
  context: ({ req }) => {
    const user = req.user;
    return { user };
  }
});

const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
