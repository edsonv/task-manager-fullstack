export const userSchema = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
    token: String!
    createdAt: String!
  }
  type Mutation {
    login(username: String!, password: String!): User!
    register(username: String!, email: String!, password: String!, confirmPassword: String!): User!
  }
`;
