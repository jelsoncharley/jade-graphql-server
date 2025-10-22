mongo --eval 'db.createCollection('duration')'
mongo --eval 'db.createCollection('location')'
mongo --eval 'db.createCollection('position')'
mongo --eval 'db.createCollection('project')'
mongo --eval 'db.createCollection('company')'

mongo --eval 'db.duration.insertMany([{from: "July 2017", to: "December 2020"}, {from: "May 2021", to: "August 2021"}, {from: "September 2021", to: "March 2022"}, {from:"April 2022", to: "September 2025"}])'
mongo --eval 'db.location.insertMany([{country: "India", province: "Maharashtra"},{country: "Canada", province: "Prince Edward Island"},{country: "Canada", province: "Halifax"}])'
mongo --eval 'db.position.insertMany([{title: "Intern"}, {title: "Development Engineer"}, {title: "Data Engineer"}, {title: "IT Developer"}, {title: "IT Analyst/Developer"}])'
