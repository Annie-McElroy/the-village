const { gql } = require('apollo-server-express');

// GraphQL schemas, queries, and mutations
const typeDefs = gql`
    type Villager {
        _id: ID
        username: String
        email: String
        password: String
        firstName: String
        lastName: String
        zipcode: Int
        crayons: [Crayon]
        requests: [Request]
        village: [Village]
    }

    type Village {
        _id: ID
        name: String
        zipcode: Int
        admin: Villager
        villagers: [Villager]
        requests: [Request]
    }

    type Crayon {
        _id: ID
        amount: Int
    }

    type Request {
        _id: ID
        title: String
        body: String
        crayons: Int
        authorId: Villager
        createdAt: String
        isComplete: Boolean
        isClaimed: Boolean
        response: Response
        comments: [Comment]
    }

    type Response {
        _id: ID
        claimId: Villager
    }

    type Comment {
        _id: ID
        body: String
        authorId: Villager
        createdAt: String
    }

    type Auth {
        token: ID
        user: Villager
    }

    input CrayonInput {
        amount: Int!
    }

    type Query {
        villager(_id: ID!): Villager
        villagers: [Villager]
        village(_id: ID!): Village
        villages(zipcode: Int): [Village]
        request(_id: ID!): Request
        requests: [Request]
        comment(_id: ID!): Comment
        comments: [Comment]
    }

    type Mutation {
        addVillager(username: String!, email: String!, password: String!, firstName: String!, lastName: String!, zipcode: Int!, crayons: CrayonInput!): Auth
        addVillage(name: String!, zipcode: Int!): Village
        addRequest(title: String!, body: String!, crayons: Int!): Request
        addComment(requestId: ID, body: String!): Comment
        updateVillager(username: String, email: String, firstName: String, lastName: String, zipcode: Int): Villager
        updateVillage(_id: ID!, name: String, zipcode: Int): Village
        updateRequest(_id: ID!, title: String, body: String, crayon: Int): Request
        updateComment(_id: ID!, body: String!): Comment
        joinVillage(village: ID!): Villager
        deleteVillager(_id: ID!): Villager
        deleteVillage(_id: ID!): Village
        deleteRequest(_id: ID!): Request
        deleteComment(_id: ID!): Comment
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;