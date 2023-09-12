import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_VILLAGER = gql`
  mutation AddVillager($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $zipcode: Int!, $crayons: CrayonInput!) {
  addVillager(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, zipcode: $zipcode, crayons: $crayons) {
    token
    user {
      _id
      username
      email
      password
      firstName
      lastName
      zipcode
      crayons {
        _id
        amount
      }
    }
  }
}
`