export const durations = (parent, args, context) => context.mongodb.collection('duration').find().toArray()
