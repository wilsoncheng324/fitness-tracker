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
    removeActivity(userId: ID!, workout: String! reps: Int!, workoutTime: Int!, date: String!): User // @TODO: you probably don't need this many input parameters to remove an activity. You probably just need the ID, to use that to find the activity in your resolver
    logOut: Boolean
  }
`;

module.exports = typeDefs;