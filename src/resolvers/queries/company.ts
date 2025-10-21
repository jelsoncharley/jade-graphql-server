import db from "../../data/_db.js";

export const companies = () => db.companies

export const company = (parent, args, context) => db.companies.find((company) => company.id === args.id)

// export const projects = (parent) => db.projects.filter((project) => project.company_id === parent.id)

// export const duration = (parent) => db.durations.find((duration) => duration.id === parent.duration_id)

// export const location = (parent) => db.locations.find((location) => location.id === parent.location_id)