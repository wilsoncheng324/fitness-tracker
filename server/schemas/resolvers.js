const {AuthenticationError} = require('apollo-server-express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');


const JWT_SECRET = 'super_secret_key';

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    currentUser: async (_, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id);
  }
  throw new AuthenticationError('Not logged in');
},
  },
  Mutation: {
    signUp: async (_, { name, username, email, password }) => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(email)) {
        throw new AuthenticationError('You must use a valid email address');
      }
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        throw new AuthenticationError('Username or email already exists');
      }

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
    
    addActivity: async (parent, { userId, workout, reps, workoutTime, date }) => {

      const activity = {
        workout: workout,
        reps: reps,
        workoutTime: workoutTime,
        date: date
      };

      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { activities: activity },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      
    },
    removeActivity: async (parent, { userId, workout, reps, workoutTime, date }) => {
      const activity = {
        workout: workout,
        reps: reps,
        workoutTime: workoutTime,
        date: date
      };
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { activities: activity } },
        { new: true }
      );
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
