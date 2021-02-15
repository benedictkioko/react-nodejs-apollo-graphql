const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

// define schema of your data graph
const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    users: [User]
  }
`;

// resolvers
const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//  typeDefs: typeDefs,
//  resolvers: resolvers
server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
