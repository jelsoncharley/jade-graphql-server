import db from '../../data/_db.js'

export const updateDuration = async (parent, args, context) => {

    await context.mongodb.collection('duration').updateOne(
        { id: parseInt(args.id) },
        { $set: { ...args.duration } }
    )

    return context.mongodb.collection('duration').findOne({ id: parseInt(args.id) })
}