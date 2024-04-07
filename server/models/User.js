const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
      type: String,
      required: false, 
      trim: true,
    },
    username: {
        type: String,
        required: false, 
        unique: true
      },
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
    activities: [
      { 
        workout:{
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
        date: {
            type: Date,
            default: Date.now
        },
        
      },
    ],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;