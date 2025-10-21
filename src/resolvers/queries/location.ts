import db from "../../data/_db.js"

export const locations = () => db.locations

export const location = (parent, args, context) => db.locations.find((location) => location.id === args.id)