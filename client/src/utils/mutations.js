import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp($email: String!, $password: String!) {
        signUp(email: $email, password: $password) {
          token
          user {
            email
            password
          }
        }
      }
`;

export const SIGN_IN = gql `
    mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
          token
          user {
            email
          }
        }
      }

`;

export const ADD_ACTIVITY = gql `
    mutation addActivity($userId: ID!, $name: String!, $reps: String!, $workoutDuration: String!) {
      addActivity(userId: $userId, name: $name, reps: $reps, workoutDuration: $workoutDuration) {
        _id
        activities {
          dateCreated
          name
          reps
          workoutDuration
        }
      }
    }

`;

export const UPDATE_PROFILE = gql `
  mutation Mutation($userId: ID!, $name: String, $age: String, $weight: String, $height_feet: String, $height_inch: String) {
    updateProfile(userId: $userId, name: $name, age: $age, weight: $weight, height_feet: $height_feet, height_inch: $height_inch) {
      _id
      age
      height_feet
      height_inch
      name
      weight
    }
  }
`

export const REMOVE_ACTIVITY = gql `
    mutation removeActivity($userId: ID!, $workout: String!, $reps: String!, $workoutTime: String!, $date: String!) {
        removeActivity(userId: $userId, workout: $workout, reps: $reps, workoutTime: $workoutTime, date: $date) {
          _id
          activities {
            workout
            reps
            workoutTime
            date
          }
        }
      }
      

`;