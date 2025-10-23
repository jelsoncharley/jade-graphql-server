
export const typeDefs = `#graphql
    type Company {
        id: ID!
        name: String!
        image: String
        duration: Duration!
        projects: [Project!]!
        location: Location!
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
        companies: [Company!]
    }

    type Project {
        id: ID!
        title: String
        company: Company!
    }

    type Query {
        companies: [Company]
        company(id: ID!): Company
        locations: [Location]
        location(id: ID!): Location
        projects: [Project]
        project(id: ID!): Project
        durations: [Duration]
    }

    type Mutation {
        deleteProject(id: ID!): [Project]
        addLocation(location: AddLocationInput): Location
        updateDuration(id: ID!, duration: UpdateDurationInput): Duration
    }

    input AddLocationInput {
        country: String!
        province: String!
    }

    input UpdateDurationInput{
        from: String
        to: String
    }
`