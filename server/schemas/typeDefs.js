const typeDefs = `
  type User {
    _id: ID
    name: String!
    username: String!
    email: String!
    password: String!
    activities: [Activity]!
  }

  type Activity {
    workout: String!
    reps: Int!
    workoutTime: Int!
    date: String!

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
    signUp(email: String!, password: String!): AuthPayload
    signIn(email: String!, password: String!): AuthPayload    
    addActivity(userId: ID!, workout: String! reps: Int!, workoutTime: Int!, date: String!): User
    removeActivity(userId: ID!, workout: String! reps: Int!, workoutTime: Int!, date: String!): User
    logOut: Boolean
  }
`;

module.exports = typeDefs;