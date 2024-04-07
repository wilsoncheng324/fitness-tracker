import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp($email: String!, $password: String!) {
        signUp(email: $email, password: $password) {
          user {
            email
          }
          token
        }
      }
`;

export const SIGN_IN = gql `
    mutation signIn($username: String!, $password: String!) {
        signIn(username: $username, password: $password) {
          token
          user {
            username
            password
          }
        }
      }

`;

export const ADD_ACTIVITY = gql `
    mutation addActivity($userId: ID!, $workout: String!, $reps: Int!, $workoutTime: Int!, $date: String!) {
        addActivity(userId: $userId, workout: $workout, reps: $reps, workoutTime: $workoutTime, date: $date) {
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


export const REMOVE_ACTIVITY = gql `
    mutation removeActivity($userId: ID!, $workout: String!, $reps: Int!, $workoutTime: Int!, $date: String!) {
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