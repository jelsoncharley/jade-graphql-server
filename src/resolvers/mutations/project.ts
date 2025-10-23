import db from "../../data/_db.js"

export const deleteProject = (parent, args, context) => {
    db.projects = db.projects.filter((project) => project.id !== args.id)
    return db.projects
}