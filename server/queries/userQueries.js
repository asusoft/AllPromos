import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
  query AuthenticateUser($login: String!, $password: String!) {
    createTokens(login: $login, password: $password) {
      __typename
      ... on TokenPair {
        accessToken
      }
      ... on ErrorWithFields {
        status
        fields
      }
    }
  }
`;

export const FETCH_USER_QUERY = gql`
  query FetchUserData {
    getMe {
      __typename
      ... on User {
        id
        login
        email
        dateOfBirth
        description
        name
        phone
        sex
        address {
            city
        }
        subscribersCount
        website
        shortDescription
      }

      ... on BaseError {
        status
      }
    }
  }
`;
