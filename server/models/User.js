const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
      type: String,
      required: true, // @TODO: this is required here, but not in your graphQL typedefs. Your models and typedefs should match
      unique: true,
      trim: true,
    },
    username: {
        type: String,
        required: true, // @TODO: this is required here, but not in your graphQL typedefs. Your models and typedefs should match
        unique: true,
      },
    email: {
        type: String,
        required: true, // @TODO: this is required here, but not in your graphQL typedefs. Your models and typedefs should match
        unique: true,
        // match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true, // @TODO: this is required here, but not in your graphQL typedefs. Your models and typedefs should match
      },
    workout: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Workout'
      },
    ],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;