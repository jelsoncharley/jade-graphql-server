import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

import db from "./data/_db.js"

import { typeDefs } from "./typeDefs/schema.js";
import { location, locations } from "./resolvers/queries/location.js";
import { project, projects } from "./resolvers/queries/project.js";
import { companies, company } from "./resolvers/queries/company.js";
import { durations } from "./resolvers/queries/duration.js";
import { deleteProject } from "./resolvers/mutations/project.js";
import { addLocation } from "./resolvers/mutations/location.js";
import { updateDuration } from "./resolvers/mutations/duration.js";


const resolvers = {
    Query: {
        companies,
        company,
        locations,
        location,
        projects,
        project,
        durations
    },
    Company: {
        projects(parent) {
            return db.projects.filter((project) => project.company_id === parent.id)
        },
        duration(parent) {
            return db.durations.find((duration) => duration.id === parent.duration_id)
        },
        location(parent) {
            return db.locations.find((location) => location.id === parent.location_id)
        }
    },
    Location: {
        companies(parent) {
            return db.companies.filter((company) => company.location_id === parent.id)
        }
    },
    Project: {
        company(parent) {
            return db.companies.find((company) => company.id === parent.company_id)
        }
    },
    Mutation: {
        deleteProject,
        addLocation,
        updateDuration

    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server started')