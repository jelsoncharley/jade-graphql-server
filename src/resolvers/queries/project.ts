import db from "../../data/_db.js"

export const projects = () => db.projects

export const project = (parent, args, context) => db.projects.find((project) => project._id === args.id)