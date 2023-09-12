import { gql } from '@apollo/client';

export const QUERY_ALL_REQUEST = gql`
{
  requests {
    _id
    title
    body
    crayons
    authorId
    }
}
`

