require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const JWT_SECRET = process.env.JWT_SECRET;
const { AuthenticationError } = require('apollo-server-express');
const { signToken, authMiddleware } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    currentUser: async (_, args, context) => {
      console.log(context);
      if (context.user) {
        const user = await User.findById(context.user._id);
        console.log(user);
        return user;
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
      const user = await User.create({ email, password: hashedPassword });
      // const savedUser = await user.save();
      console.log(user)
      const token = signToken(user);
      
      return { token, user };
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
    updateProfile: async (parent, { userId, name, age, weight, height_feet, height_inch }) => {

      const profile = {
        name: name,
        age: age,
        weight: weight,
        height_feet: height_feet,
        height_inch: height_inch
      };

      return User.findOneAndUpdate(
        { _id: userId },
        {
          $set: profile,
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
