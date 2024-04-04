const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
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
