import db from "../../data/_db.js";

export const companies = (parent, args, context) => context.mongodb.collection('company').find().toArray()

export const company = (parent, args, context) => context.mongodb.collection('company').findOne({ id: parseInt(args.id) })


// export const projects = (parent) => db.projects.filter((project) => project.company_id === parent.id)

// export const duration = (parent) => db.durations.find((duration) => duration.id === parent.duration_id)

// export const location = (parent) => db.locations.find((location) => location.id === parent.location_id)