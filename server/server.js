const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();
const cors = require('cors');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const path = require('path');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

const corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  accessControlAllowOrigin: '*',
  accessControlAllowCredentials: true,
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//giving access to everything in build folder, consolidated on client side
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'../client/build')))
}

app.get('*',(req,res) => {
 res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);