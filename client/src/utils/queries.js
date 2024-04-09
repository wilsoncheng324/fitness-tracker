import { gql } from '@apollo/client';

export const QUERY_ACTIVITIES = gql `
  query me {
    me {
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


export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      email
      activities {
        dateCreated
        name
        reps
        workoutDuration
      }
    }
  }
`;

export const QUERY_ME = gql`
  query currentUser {
    currentUser {
      _id
      name
     
      email
      activities {
        dateCreated
        name
        reps
        workoutDuration
      }
    }
  }
`;
