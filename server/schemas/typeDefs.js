const typeDefs = `
  type User {
    _id: ID
    name: String
    username: String
    email: String
    workout: Workout
  }

  type Workout {
    _id: ID
    name: String
    weight: Int
    reps: Int
  }

  type Query {
    users: [User]
    workouts: [Workout]
  }
`;

module.exports = typeDefs;
