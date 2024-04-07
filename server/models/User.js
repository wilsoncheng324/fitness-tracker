const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const userSchema = new Schema({
    name: {
      type: String,
      required: true, 
      trim: true,
    },
    username: {
        type: String,
        required: true, 
        unique: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Must use a valid email address'],
        },
    password: {
        type: String,
        required: true,
        minlength: 8
      },
    age: {
      type: Number,
      required: true,
    },
    height_feet: {
        type: Number,
        required: true,
        min: 1,
        max: 7
    },
    height_inch: {
      type: Number,
      required: true,
      min: 0,
      max: 12
    },
    weight: {
      type: Number,
      required: true,
      min: 1,
      max: 300
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
        workoutDurationTime: {
          type: Number,
          required: true
        },
        datetime: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        
      },
    ],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;