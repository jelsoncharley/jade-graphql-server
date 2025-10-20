
export const typeDefs = `#graphql
    type Company {
        id: ID!
        name: String!
    }

    type Duration {
        id: ID!
        from: String
        to: String
    }

    type Location {
        id: ID!
        country: String
        province: String
    }

    type Project {
        id: ID!
        title: String
    }

    type Query {
        companies: [Company]
        company(id: ID!): Company
        locations: [Location]
        location(id: ID!): Location
        projects: [Project]
        project(id: ID!): Project
    }
`