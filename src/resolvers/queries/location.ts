export const locations = (parent, args, context) => context.mongodb.collection('location').find().toArray()

export const location = (parent, args, context) => context.mongodb.collection('location').findOne({ id: parseInt(args.id) })