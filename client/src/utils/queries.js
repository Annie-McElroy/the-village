import { gql } from '@apollo/client';

export const QUERY_ALL_REQUEST = gql`
{
  requests {
    _id
    title
    body
    crayons
    authorId{
      _id
      username
    }
    }
}
`

export const QUERY_VILLAGER_PROFILE = gql`
query Query($id: ID!) {
  villager(_id: $id) {
    _id
    username
    email
    firstName
    lastName
    zipcode
    crayons {
      _id
      amount
    }
    requests {
      _id
      title
      body
      crayons
      authorId {
        _id
        username
        email
        firstName
        lastName
        zipcode
      }
      createdAt
      isComplete
      isClaimed
      response {
        _id
        claimId {
          _id
          username
          email
            firstName
          lastName
          zipcode
        }
      }
      comments {
        _id
        body
        createdAt
      }
    }
    village {
      _id
      name
      zipcode
      admin {
        _id
        username
        email
        firstName
        lastName
        zipcode
      }
      villagers {
        _id
        username
        email
        firstName
        lastName
        zipcode
      }
    }
  }
}
`

export const QUERY_VILLAGER_CRAYON = gql`
query Query($id: ID!) {
  villager(_id: $id) {
    _id
    username
    email
    firstName
    lastName
    zipcode
    crayons {
      _id
      amount
    }
  }
}
`


export const QUERY_VILLAGE = gql`
query Village($id: ID!) {
  village(_id: $id) {
    _id
    admin {
      _id
      username
    }
    name
    requests {
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
    villagers {
      _id
      username
    }
    zipcode
  }
}
`