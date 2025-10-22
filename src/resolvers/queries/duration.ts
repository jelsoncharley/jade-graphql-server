import db from "../../data/_db.js";

export const durations = (parent, args, context) => context.mongodb.collection('duration').find().toArray()

// export default { companies, company, locations, location, projects, project, durations } 
