import db from "../../data/_db.js"

export const locations = (parent, args, context) => context.mongodb.collection('location').find().toArray()

export const location = (parent, args, context) => db.locations.find((location) => location._id === args.id)