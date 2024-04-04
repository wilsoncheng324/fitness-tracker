const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
      type: String,
      required: true, 
      unique: true,
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
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8
      },
    activities: [
      {
        type: String,
        trim: true
      },
    ],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;