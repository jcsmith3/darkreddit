require('dotenv').config()
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { resolvers } = require('./graphql/resolvers/resolvers')
const { typeDefs } = require('./graphql/schema/schema')
const { query } = require('./database/index')



const app = express();
const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: {
		  query
		}
});

server.applyMiddleware({ app });

app.use(( req, res ) => {
  res.status(200);
  res.send('Hello!');
  res.end();
});

app.listen( process.env.PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
)
