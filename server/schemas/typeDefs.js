const typeDefs = `
  type User {
    _id: ID
    name: String!
    username: String!
    email: String!
    password: String!
    activities: [String]!
  }

  type AuthPayload {
    token: String!
    user: User
  }

  type Query {
    users: [User]
    currentUser: User
  }

  type Mutation {
    signUp(name: String!, username: String!, email: String!, password: String!): AuthPayload
    signIn(username: String!, password: String!): AuthPayload    
    addActivity(userId: ID!, activity: String!): User
    removeActivity(userId: ID!, activity: String!): User
    logOut: Boolean
  }
`;

module.exports = typeDefs;