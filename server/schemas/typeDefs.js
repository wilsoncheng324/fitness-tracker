const typeDefs = `
  type User {
    _id: ID
    name: String // @TODO: make this required
    username: String // @TODO: make this required
    email: String // @TODO: make this required
    workout: Workout
  }

  // @TODO: At least one of the Workout fields should be required, or else you could just have a completely empty row in the database
  type Workout {
    _id: ID
    name: String // @TODO: make this required 
    weight: Int
    reps: Int
  }

  type AuthPayload {
    token: String // @TODO: make this required
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
