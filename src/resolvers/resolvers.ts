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
        projects(parent) {
            return db.projects.filter((project) => project.company_id === parent.id)
        },
        duration(parent) {
            return db.durations.find((duration) => duration._id === parent.duration_id)
        },
        location(parent) {
            return db.locations.find((location) => location._id === parent.location_id)
        }
    },
    Location: {
        companies(parent) {
            return db.companies.filter((company) => company.location_id === parent.id)
        }
    },
    Project: {
        company(parent) {
            return db.companies.find((company) => company._id === parent.company_id)
        }
    },
    Mutation: {
        deleteProject,
        addLocation,
        updateDuration

    }

}