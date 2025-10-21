import db from '../../data/_db.js'

export const updateDuration = (parent, args, context) => {
    db.durations.map((duration, idx) => {
        if (duration.id === args.id) {
            db.durations[idx] = { ...duration, ...args.duration }
        }
    })
    return db.durations.find((duration) => duration.id === args.id)
}