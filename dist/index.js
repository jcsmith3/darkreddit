const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./graphql/resolvers/resolvers');
const { schema } = require('./graphql/schema/schema');
const { query } = require('./database/dbconfig');
const app = express();
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        query
    }
});
server.applyMiddleware({ app });
app.use((_req, res) => {
    res.status(200);
    res.send('Hello!');
    res.end();
});
app.listen({ port: process.env.PORT }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
//# sourceMappingURL=index.js.map