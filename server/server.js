//Import required modules
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');


// Import GraphQL schemas and db connection
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Set up Port and Apollo Server
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

// Configure express middleware for parsing incoming req bodies in url-encoded and JSON formats
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets using built-in Express middleware
app.use('/images', express.static(path.join(__dirname, '../client/images')));

// Serve static assets once in production 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// Send root route to index html once in production 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create new instance of Apollo Server with the GraphQL schema
const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http:localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startApolloServer(); 