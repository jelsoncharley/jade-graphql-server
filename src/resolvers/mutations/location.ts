import db from '../../data/_db.js'

export const addLocation = (parent, args, context) => {
    let location = {
        ...args.location,
        id: Math.floor(Math.random() * 100).toString()
    }
    db.locations.push(location)
    return location
}