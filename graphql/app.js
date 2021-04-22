const koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const { makeExecutableSchema } = require("graphql-tools");
const { resolvers, typeDefs } = require("./schemas");
const PORT = 4000;

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

const app = new koa();

server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(
    `server is ruuning on http://localhost:${PORT + server.graphqlPath} `
  );
});
