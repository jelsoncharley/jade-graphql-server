import db from "../../data/_db.js"

export const deleteProject = (parent, args, context) => {
    db.projects = db.projects.filter((project) => project._id !== args.id)
    return db.projects
}