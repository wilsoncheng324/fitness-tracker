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
            password
          }
        }
      }

`;

export const ADD_ACTIVITY = gql `
    mutation addActivity($userId: ID!, $name: String!, $reps: Int!, $workoutDuration: Int!) {
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