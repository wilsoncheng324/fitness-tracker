const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo/server');
const { expressMiddleware } = require('apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const exp = require('constants');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// connect to MongoDB database
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopologu: true,
});
mongoose.connection.once("open", () => 
    console.log(`connected to MongoDB" on ${db}`)
);

// Update the ApolloServer constructor to include the context
// the server will use to authenticate requests
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

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://${PORT}/graphql`);
        });
    });
};

startApolloServer();