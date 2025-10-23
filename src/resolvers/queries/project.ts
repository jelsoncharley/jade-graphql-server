export const projects = (parent, args, context) => context.mongodb.collection('project').find().toArray()

export const project = (parent, args, context) => context.mongodb.collection('project').findOne({ id: parseInt(args.id) })