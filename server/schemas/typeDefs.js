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
    signUp(name: String!, username: String!, email: String!, password: String!): AuthPayload
    signIn(username: String!, password: String!): AuthPayload    
    addActivity(userId: ID!, workout: String! reps: Int!, workoutTime: Int!, date: String!): User
    removeActivity(userId: ID!, workout: String! reps: Int!, workoutTime: Int!, date: String!): User
    logOut: Boolean
  }
`;

module.exports = typeDefs;

// addActivity(userId: ID!, activity: String!): User
//     removeActivity(userId: ID!, activity: String!): User