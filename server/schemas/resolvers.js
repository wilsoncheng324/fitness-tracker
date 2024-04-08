require('dotenv').config();
const {AuthenticationError, signToken} = require('../utils/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');


// const JWT_SECRET = process.env.JWT_SECRET;

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
    signUp: async (_, {email, password }) => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(email)) {
        throw new AuthenticationError('You must use a valid email address');
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new AuthenticationError('Email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword });
      const savedUser = await user.save();
      
      const token = signToken(user);
      
      return { token, user: savedUser };
    },
    signIn: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email');
      }

      const correctPw = await bcrypt.compare(password, user.password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }
      // console.log('JWT_SECRET:', JWT_SECRET);
      const token = signToken(user);

      return { token, user };
    },
    
    addActivity: async (parent, { userId, name, reps, workoutDuration, dateCreated }) => {

      const activity = {
        name: name,
        reps: reps,
        workoutDuration: workoutDuration,
        dateCreated: dateCreated
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
    // removeActivity: async (parent, { userId, workout, reps, workoutTime, date }) => {
    //   const activity = {
    //     workout: workout,
    //     reps: reps,
    //     workoutTime: workoutTime,
    //     date: date
    //   };
    //   return User.findOneAndUpdate(
    //     { _id: userId },
    //     { $pull: { activities: activity } },
    //     { new: true }
    //   );
    // },

    logOut: async (_, args, context) => {
      if (context.user) {
        return true;
      }
      throw new AuthenticationError('Not Authenticated');
    },
  },
};

module.exports = resolvers;
