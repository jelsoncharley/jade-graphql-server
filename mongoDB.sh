mongod --dbpath="." --bind_ip 127.0.0.1

mongo --eval 'db.createCollection('duration')'
mongo --eval 'db.createCollection('location')'
mongo --eval 'db.createCollection('position')'
mongo --eval 'db.createCollection('project')'
mongo --eval 'db.createCollection('company')'

mongo --eval 'db.duration.insertMany([{from: "July 2017", to: "December 2020"}, {from: "May 2021", to: "August 2021"}, {from: "September 2021", to: "March 2022"}, {from:"April 2022", to: "September 2025"}])'
mongo --eval 'db.location.insertMany([{country: "India", province: "Maharashtra"},{country: "Canada", province: "Prince Edward Island"},{country: "Canada", province: "Halifax"}])'
mongo --eval 'db.position.insertMany([{title: "Intern"}, {title: "Development Engineer"}, {title: "Data Engineer"}, {title: "IT Developer"}, {title: "IT Analyst/Developer"}])'
mongo --eval 'db.project.insertMany([{id: 1, title: "HausKhaas - Admin App", companyId: 1}, {id: 2, title: "Platina Command Center", companyId: 1}, {id: 3, title: "VMware - Network Simulation Tool", companyId: 1}, {id: 4, title: "VMware - Smart Fabric Director", companyId: 1}, {id: 5, title: "Pareto Tool", companyId: 2}, {id: 6, title: "Cyber Defense Matrix", companyId: 2}, {id: 7, title: "Enterprise Verse Management Facility", companyId: 3}, {id: 8, title: "Enterprise Correspondence History", companyId: 3}])'