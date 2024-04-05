const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
  });
  
  const Workout = model('Workout', workoutSchema);
  
  module.exports = Workout;
