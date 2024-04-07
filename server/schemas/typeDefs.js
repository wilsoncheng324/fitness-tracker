const typeDefs = `
  type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    age: Int
    height_feet: Int
    height_inch: Int
    weight: Int
    activities: [Activity]!
  }

  type Activity {
    _id: ID
    name: String
    reps: Int
    workoutDurationTime: Int
    datetime: String

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
    signUp(name: String!, username: String!, email: String!, password: String!, age: Int!, height_feet: Int!, height_inch: Int!, weight: Int!): AuthPayload
    signIn(username: String!, password: String!): AuthPayload    
    addActivity(userId: ID!, name: String! reps: Int!, workoutDurationTime: Int!): User
    # removeActivity(userId: ID!, activityId: ID!): User
    logOut: Boolean
  }
`;

module.exports = typeDefs;