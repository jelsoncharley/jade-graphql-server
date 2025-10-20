import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

import db from "./data/_db.js"

import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        companies() {
            return db.companies
        },
        company(parent, args, context) {
            return db.companies.find((company) => company.id == args.id)
        },
        locations() {
            return db.locations
        },
        location(parent, args, context) {
            return db.locations.find((location) => location.id == args.id)
        },
        projects() {
            return db.projects
        },
        project(parent, args, context) {
            return db.projects.find((project) => project.id == args.id)
        }
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