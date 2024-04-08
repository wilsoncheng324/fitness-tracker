const typeDefs = `
  type User {
    _id: ID
    name: String
    # username: String
    email: String
    password: String
    age: String
    weight: String
    height_feet: String
    height_inch: String
    activities: [Activity]!
  }

  type Activity {
    _id: ID
    name: String
    reps: Int
    workoutDuration: Int
    dateCreated: String
  }

  type AuthPayload {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    currentUser: User
  }

  type Mutation {
    signUp(email: String!, password: String!): AuthPayload
    signIn(email: String!, password: String!): AuthPayload    
    addActivity(userId: ID!, name: String! reps: Int!, workoutDuration: Int!): User
    # removeActivity(userId: ID!, workout: String! reps: Int!, workoutTime: Int!, date: String!): User
    logOut: Boolean
  }
`;

module.exports = typeDefs;