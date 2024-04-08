const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const userSchema = new Schema({
    name: {
      type: String,
      required: false, 
      trim: true,
    },
    // username: {
    //     type: String,
    //     required: false, 
    //     unique: false
    //   },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8
      },
    age: {
      type: String,
      max: 50
    },
    weight: {
      type: String,
      min: 10,
      max: 300
    },
    height_feet: {
      type: String,
      min:1,
      max: 8
    },
    height_inch: {
      type: String,
      min: 1,
      max: 12
    },
    activities: [
      { 
        name:{
          type: String,
          required: true,
          trim: true,
        },
        reps: {
          type: Number,
          required: true
        },
        workoutDuration: {
            type: Number,
            required: true
        },
        dateCreated: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        
      },
    ],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;