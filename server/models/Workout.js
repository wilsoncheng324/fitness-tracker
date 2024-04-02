const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: {
      type: String,
      required: true, // @TODO: this is required here, but not in your graphQL typedefs. Your models and typedefs should match
      unique: true,
      trim: true,
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    
    
  });
  
  const Workout = model('Workout', workoutSchema);
  
  module.exports = Workout;

//   school > class > professor
//  user > workout

// dumbbell, tredmill, bodyweight