import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
  query AuthenticateUser($login: String!, $password: String!) {
    createTokens(login: $login, password: $password) {
      __typename
      ... on TokenPair {
        accessToken
        refreshToken
      }
      ... on ErrorWithFields {
        status
        fields
      }
    }
  }
`;

export const REFRESH_ACCESS_TOKEN = gql`
  query RefreshAccessToken($refreshToken: String!) {
    refreshAccessToken(refreshToken: $refreshToken) {
      ... on AccessToken {
        __typename
        accessToken
      }
      ... on BaseError {
        __typename
      }
    }
  }
`;

export const DELETE_REFRESH_TOKEN = gql`
  query DeleteRefreshToken($refreshToken: String!) {
    deleteRefreshToken(refreshToken: $refreshToken) {
      status
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
        avatar {
          path
        }
      }

      ... on BaseError {
        status
      }
    }
  }
`;
