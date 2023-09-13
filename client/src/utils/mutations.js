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

export const ADD_VILLAGE = gql`
mutation AddVillage($name: String!, $zipcode: Int!) {
  addVillage(name: $name, zipcode: $zipcode) {
    village {
      _id
      name
      zipcode
      admin {
        _id
        username
      }
    }
  }
}
`

export const JOIN_VILLAGE = gql`
mutation JoinVillage($villageId: ID!) {
  joinVillage(villageId: $villageID) {
    villager {
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

export const DELETE_VILLAGER = gql`
mutation Mutation($_id: ID!) {
  deleteVillager(_id: $_id) {
    _id
    username
  }
}
`


export const ADD_COMMENT = gql`
mutation AddComment($requestId: ID, $body: String!) {
  addComment(requestId: $requestId, body: $body) {
    comment {
      _id
      body
      authorId {
        _id
        username
      }
    }
  }
}
`

export const UPDATE_VILLAGER = gql`
mutation Mutation($username: String, $email: String, $firstName: String, $lastName: String, $zipcode: Int) {
  updateVillager(username: $username, email: $email, firstName: $firstName, lastName: $lastName, zipcode: $zipcode) {
    username
    email
    firstName
    lastName
    zipcode
  }
}
`