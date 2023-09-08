const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Villager {
        _id: ID
        username: String
        email: String
        password: String
        firstName: String
        lastName: String
        zipcode: Int
        crayons: Crayon
        requests: [Request]
    }

    type Village {
        _id: ID
        name: String
        zipcode: Int
        admin: Villager
        villagers [Villager]
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
        villageId: Village
        createdAt: Date
        isComplete: Boolean
        isClaimed: Boolean
        response: Response
        comments: [Comment]
    }

    type Response {
        _id: ID
        claimedId: Villager
    }

    type Comment {
        _id: ID
        body: String
        authorId: Villager
        requestId: Request
        createdAt: Date
    }

    type Auth {
        token: ID
        user: Villager
    }

    type Query {
        villager(crayons: ID, amount: Int): Villager
        villagers(crayons: ID, amount: Int): [Villager]
        village(villagers: ID, username: String): Village
        villages: [Village]
        request(_id: ID!): Request
        requests(authorId: ID, villageId: ID, responses: ID, claimID: ID, comments: ID, body: String): [Request]
    }

    type Mutation {
        addVillager(username: String!, email: String!, password: String!, firstName: String!, lastName: String!, zipcode: Int!, crayons: Int!): Auth
        addVillage(name: String!, zipcode: Int!): Village
        addRequest(title: String!, body: String!, crayons: Int!): Request
        editVillager(username: String, email: String, password: String, firstName: String, lastName: String, zipcode: Int): Villager
        editVillage(name: String, zipcode: Int): Village
        editRequest(title: String, body: String, crayon: Int): Request
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;