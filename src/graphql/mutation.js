import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String!
    $password: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation updateUser($email: String) {
    updateUser(email: $email) {
      id
    }
  }
`;
