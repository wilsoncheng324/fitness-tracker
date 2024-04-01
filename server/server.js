const express = require('express');
const path = require('path');
const db = require('./config/connection');

const { ApolloServer } = require('apollo/server');
const { expressMiddleware } = require('apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

// const exp = require('constants');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Start the ApolloServer with the express app as middleware
// to handle GraphQL requests
const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware,
    }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });

    db.once('open', () => { // start the API server
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://${PORT}/graphql`);
        });
    });
};

startApolloServer();