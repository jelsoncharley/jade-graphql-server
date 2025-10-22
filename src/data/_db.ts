let companies = [
    { _id: '1', name: 'Calsoft Inc', image: "/images/logo.webp", duration_id: '1', location_id: '1' },
    { _id: '2', name: 'AXIS Capital', image: "/images/axis-capital-logo.png", duration_id: '2', location_id: '3' },
    { _id: '3', name: 'Canada Revenue Agency', image: "/images/canadian-revenue-agency.jpg", duration_id: '3', location_id: '2' },
]

let durations = [
    { _id: '1', from: 'July 2017', to: 'December 2020' },
    { _id: '2', from: 'May 2021', to: 'August 2021' },
    { _id: '3', from: 'September 2021', to: 'September 2025' },
]

let locations = [
    { _id: '1', country: 'India', province: 'Maharashtra' },
    { _id: '2', country: 'Canada', province: 'Prince Edward Island' },
    { _id: '3', country: 'Canada', province: 'Halifax' }
]

let projects = [
    { _id: '1', title: 'HausKhass - Admin App', company_id: '1' },
    { _id: '2', title: 'Platina Command Center', company_id: '1' },
    { _id: '3', title: 'VMware - Network Simulation Tool', company_id: '1' },
    { _id: '4', title: 'VMware - Smart Fabric Director ', company_id: '1' },
    { _id: '5', title: 'Pareto Tool', company_id: '2' },
    { _id: '6', title: 'Cyber Defense Matrix', company_id: '2' },
    { _id: '7', title: 'Enterprise Verse Management Facility', company_id: '3' },
    { _id: '8', title: 'Enterprise Correspondence History', company_id: '3' }
]

let positions = [
    { _id: '1', title: 'Intern' },
    { _id: '2', title: 'Development Engineer' },
    { _id: '3', title: 'Data Engineer' },
    { _id: '4', title: 'IT Developer' },
    { _id: '5', title: 'IT Analyst/Developer' },
]



export default { companies, durations, locations, projects, positions }