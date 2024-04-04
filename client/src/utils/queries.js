import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
        _id
        email
        name
        password
        username
        activities {
          workoutTime
          workout
          reps
          date
        }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
        _id
        name
        username
        email
        password
        activities {
          date
          reps
          workout
          workoutTime
        }
    }
  }
`;
