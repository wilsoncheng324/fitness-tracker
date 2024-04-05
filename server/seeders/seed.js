const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
// @Note: I updated the workout date to make weight and reps different
// when seeding your database, having the seed data be very random/unique can help
// you determine if you have a bug in seeding. e.g. with weight/reps set to be the 
// same thing in your seed data, you don't know if weight is accidentally saving as reps or vice-versa
// const workoutData = require('./workoutData.json');


db.once('open', async () => {
  // clean database
  // await cleanDB("User", "users");
  // await cleanDB("Workout", "workouts");
  await User.create(userData);
  // bulk create each model
  // const users = await User.insertMany(userData);
  // const workouts = await Workout.insertMany(workoutData);



  console.log('all done!');
  process.exit(0);
});
