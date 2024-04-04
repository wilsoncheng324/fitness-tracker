import { gql } from '@applo/client';

export const SIGN_UP = gql`
    mutation signUp($name: String!, $username: String!, $email: String!, $password: String!) {
        signUp(name: $name, username: $username, email: $email, password: $password) {
          user {
            email
            name
            password
            username
          }
        }
      }
`;

export const SIGN_IN = gql `{
    mutation signIn($username: String!, $password: String!) {
        signIn(username: $username, password: $password) {
          token
          user {
            username
            password
          }
        }
      }
}
`;

export const ADD_ACTIVITY = gql `{
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
}
`;


export const REMOVE_ACTIVITY = gql `{
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
      
}
`;