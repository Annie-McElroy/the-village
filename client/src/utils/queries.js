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