const express = require('express');
// Import the ApolloServer class and expressMiddleware helper function
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();
const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
