import db from "../../data/_db.js"

export const deleteProject = async (parent, args, context) => {
    await context.mongodb.collection('project').deleteOne({ id: parseInt(args.id) })
    return context.mongodb.collection('project').find().toArray()
}