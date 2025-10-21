let companies = [
    { id: '1', name: 'Calsoft Inc', duration_id: '1', location_id: '1' },
    { id: '2', name: 'AXIS Capital', duration_id: '2', location_id: '3' },
    { id: '3', name: 'Canada Revenue Agency', duration_id: '3', location_id: '2' },
]

let durations = [
    { id: '1', from: 'July 2017', to: 'December 2020' },
    { id: '2', from: 'May 2021', to: 'August 2021' },
    { id: '3', from: 'September 2021', to: 'September 2025' },
]

let locations = [
    { id: '1', country: 'India', province: 'Maharashtra' },
    { id: '2', country: 'Canada', province: 'Prince Edward Island' },
    { id: '3', country: 'Canada', province: 'Halifax' }
]

let projects = [
    { id: '1', title: 'HausKhass - Admin App', company_id: '1' },
    { id: '2', title: 'Platina Command Center', company_id: '1' },
    { id: '3', title: 'VMware - Network Simulation Tool', company_id: '1' },
    { id: '4', title: 'VMware - Smart Fabric Director ', company_id: '1' },
    { id: '5', title: 'Pareto Tool', company_id: '2' },
    { id: '6', title: 'Cyber Defense Matrix', company_id: '2' },
    { id: '7', title: 'Enterprise Verse Management Facility', company_id: '3' },
    { id: '8', title: 'Enterprise Correspondence History', company_id: '3' }
]

export default { companies, durations, locations, projects }