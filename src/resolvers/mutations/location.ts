import db from '../../data/_db.js'

export const addLocation = async (parent, args, context) => {
    let records = await context.mongodb.collection('location').find().toArray()

    await context.mongodb.collection('location').insertOne({
        id: records.length + 1,
        ...args.location
    })

    return await context.mongodb.collection('location').findOne({ id: records.length + 1 })
}