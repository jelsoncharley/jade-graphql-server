import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

// import db from "./data/_db.js"

import { typeDefs } from "./typeDefs/schema.js";
import { resolvers } from "./resolvers/resolvers.js";

import { Db, MongoClient } from "mongodb";

let mongodb: Db;

async function startServer() {
    const client = new MongoClient('mongodb://localhost:27017')
    client.connect().then(() => {
        mongodb = client.db('jade');
        console.log('Mongo Server started')

    }).finally(async () => {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
            context: async () => {
                return { mongodb }
            }
        })
        console.log('Server started')
    })
}

startServer();

