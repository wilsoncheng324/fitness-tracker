const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
      type: String,
      required: true, 
      unique: true, // @TODO: Remove the uniqueness constraint here. There are quite a few 'John's and 'Jane's in the world.
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
        match: [/.+@.+\..+/, 'Must use a valid email address'], // Consider a more robust email validation regex. This one looks a bit short. Just checks for something before the @ and a .whatever in the post-@ portion. But this would accept the Euro symbol for example (€), which passes your regex but is not a valid email address
    },
    password: {
        type: String,
        required: true,
        minlength: 8
      },
    activities: [
      { 
        workout:{ // @TODO don't have to do this but I would *consider* changing this to just be "name".  'Workout' implies a grouping of an activity with some duration (reps) and weight. This field is just meant to represent the name of an activity that can be done
          type: String,
          required: true,
          trim: true,
        },
        reps: {
          type: Number,
          required: true
        },
        workoutTime: { // @TODO: prefer 'duration'. 'workoutTime is ambigious'. Does this mean the time the workout was started? The time it ended? how long it was? 
            type: Number,
            required: true
        },
        date: { // @TODO if workout time + date go together and are meant to be a date/time pair, you can do that just in this one field and call it  'datetime'. The mongodb Date field supports storing date/time as one thing
            type: Date,
            default: Date.now
        },
        
      },
    ],
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;