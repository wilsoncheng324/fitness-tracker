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
    reps: String
    workoutDuration: String
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
    addActivity(userId: ID!, name: String! reps: String!, workoutDuration: String!): User
    # removeActivity(userId: ID!, workout: String! reps: String!, workoutTime: String!, date: String!): User
    logOut: Boolean
    updateProfile(userId: ID!, name: String, age: String, weight: String, height_feet: String, height_inch: String): User
  }
`;

module.exports = typeDefs;