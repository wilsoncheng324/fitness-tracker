const { User, Workout } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('workout');
    },
    workouts: async () => {
      return await Workout.find({});
    }
  }
};

module.exports = resolvers;
