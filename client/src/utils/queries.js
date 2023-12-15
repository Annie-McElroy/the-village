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

export const QUERY_VILLAGER = gql`
query Villager($id: ID!) {
  villager(_id: $id) {
    _id
    email
    firstName
    lastName
    password
    username
    zipcode
    village {
      _id
    }
    requests {
      _id
      title
      body
      crayons
      authorId {
        _id
        username
      }
    }
    crayons {
      _id
      amount
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

export const QUERY_VILLAGES = gql`
query Villages {
  villages {
    _id
    admin {
      _id
      username
    }
    name
    villagers {
      _id
      username
    }
    zipcode
  }
}
`

export const QUERY_SINGLE_REQUEST = gql`
query Request($id: ID!) {
  request(_id: $id) {
    _id
    body
    title
    crayons
    createdAt
    isClaimed
    isComplete
    authorId {
      _id
      username
    }
    comments {
      _id
      authorId {
        _id
        username
      }
      body
      createdAt
    }
    response {
      _id
      claimId {
        _id
        username
        crayons {
          _id
          amount
        }
      }
    }
  }
}
`