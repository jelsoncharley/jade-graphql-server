import db from "../data/_db.js"

import { updateDuration } from "./mutations/duration.js"
import { addLocation } from "./mutations/location.js"
import { deleteProject } from "./mutations/project.js"
import { companies, company } from "./queries/company.js"
import { durations } from "./queries/duration.js"
import { location, locations } from "./queries/location.js"
import { project, projects } from "./queries/project.js"

export const resolvers = {
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
        projects(parent, args, context) {
            return context.mongodb.collection('project').find({ companyId: parseInt(parent.id) }).toArray()
        },
        duration(parent, args, context) {
            return context.mongodb.collection('duration').findOne({ id: parseInt(parent.durationId) })
        },
        location(parent, args, context) {
            return context.mongodb.collection('location').findOne({ id: parseInt(parent.locationId) })
        }
    },
    Location: {
        companies(parent, args, context) {
            return context.mongodb.collection('company').find({ locationId: parseInt(parent.id) }).toArray()
        }
    },
    Project: {
        company(parent, args, context) {
            return context.mongodb.collection('company').findOne({ id: parseInt(parent.companyId) })
        }
    },
    Mutation: {
        deleteProject,
        addLocation,
        updateDuration

    }

}