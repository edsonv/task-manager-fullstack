export const taskSchema = `#graphql
  type Task {
    id: ID!
    title: String!
    description: String
    date: String!
    isCompleted: Boolean!
    isImportant: Boolean!
    createdAt: String!
    updatedAt: String!
    userId: ID!
  }
  type Query {
    getTasks: [Task]
  }
  type Mutation {
    createTask(title: String!, description: String, date: String!, isCompleted: Boolean!, isImportant: Boolean!): Task!
  }
`;
