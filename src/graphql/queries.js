import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query Query {
    countries {
      code
      name
      phone
      currency
      states {
        name
      }
    }
  }
`;

export const ALL_LANGUAGES = gql`
  query Query {
    languages {
      name
      code
      native
      rtl
    }
  }
`;

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;
