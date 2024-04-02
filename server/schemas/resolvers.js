const {AuthenticationError} = require('apollo-server-express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Workout } = require('../models');

const JWT_SECRET = 'super_secret_key';

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('workout');
    },
    workouts: async () => {
      return await Workout.find({});
    },
    currentUser: async (_, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id).populate('workout');
  }
  throw new AuthenticationError('Not logged in');
},
  },
  Mutation: {
    signUp: async (_, { name, username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, username, email, password: hashedPassword });
      const savedUser = await user.save();
      
      const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET, { expiresIn: '1d' });
      
      return { token, user: savedUser };
    },
    signIn: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await bcrypt.compare(password, user.password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1d' });

      return { token, user };
    },
    logOut: async (_, args, context) => {
      if (context.user) {
        return true;
      }
      throw new AuthenticationError('Not Authenticated');
    },
  },
};

module.exports = resolvers;
