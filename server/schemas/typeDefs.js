const typeDefs = `
  type User {
    _id: ID
    name: String! 
    username: String! 
    email: String!  
    workout: [Workout]
  }

  type Workout {
    _id: ID
    name: String! 
    weight: Int
    reps: Int
  }

  type AuthPayload {
    token: String!
    user: User
  }

  type Query {
    users: [User]
    workouts: [Workout]
    currentUser: User
  }

  type Mutation {
    signUp(name: String!, username: String!, email: String!, password: String!): AuthPayload
    signIn(username: String!, password: String!): AuthPayload
    logOut: Boolean
  }
`;

module.exports = typeDefs;
