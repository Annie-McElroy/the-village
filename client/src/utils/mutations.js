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
mutation AddVillager($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $zipcode: String!, $crayons: CrayonInput!) {
  addVillager(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, zipcode: $zipcode, crayons: $crayons) {
    token
    user {
      _id
      username
      email
      firstName
      lastName
      password
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
mutation AddVillage($name: String!, $zipcode: String!) {
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
mutation JoinVillage($village: ID!) {
  joinVillage(village: $village) {
    _id
    username
    village {
      _id
      name
      zipcode
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

export const UPDATE_VILLAGER = gql`
mutation Mutation($username: String, $email: String, $firstName: String, $lastName: String, $zipcode: String) {
  updateVillager(username: $username, email: $email, firstName: $firstName, lastName: $lastName, zipcode: $zipcode) {
    username
    email
    firstName
    lastName
    zipcode
  }
}
`

export const ADD_COMMENT = gql`
mutation AddComment($body: String!, $requestId: ID) {
  addComment(body: $body, requestId: $requestId) {
    _id
    authorId {
      _id
      username
    }
    body
    createdAt
  }
}
`

export const DELETE_COMMENT = gql`
mutation DeleteComment($id: ID!) {
  deleteComment(_id: $id) {
    _id
    authorId {
      _id
      username
    }
    body
    createdAt
  }
}
`

export const ADD_REQUEST = gql`
mutation AddRequest($title: String!, $body: String!, $crayons: Int!, $village: ID) {
  addRequest(title: $title, body: $body, crayons: $crayons, village: $village) {
    _id
    authorId {
      username
    }
    body
    crayons
    title
    isClaimed
    createdAt
    isComplete
  }
}
`

export const DELETE_REQUEST = gql`
mutation DeleteRequest($id: ID!) {
  deleteRequest(_id: $id) {
    _id
    authorId {
      _id
      username
    }
    body
    comments {
      _id
      body
      authorId {
        _id
        username
      }
    }
    createdAt
    isClaimed
    isComplete
    title
    response {
      _id
      claimId {
        _id
        username
      }
    }
    crayons
  }
}
`

export const UPDATE_REQUEST = gql`
mutation UpdateRequest($id: ID!, $title: String, $body: String, $crayon: Int) {
  updateRequest(_id: $id, title: $title, body: $body, crayon: $crayon) {
    _id
    authorId {
      _id
      username
    }
    body
    crayons
    createdAt
    isClaimed
    isComplete
    title
  }
}
`