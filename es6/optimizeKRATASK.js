const { vehicle, driver } = require("./db");

// Vehicle Class
class Vehicle {
  constructor({ id, type, fuel, mileage, available, serviceDate, assignedDriverId }) {
    Object.assign(this, { id, type, fuel, mileage, available, serviceDate, assignedDriverId });
  }

  getDueDate() {
    const daysUntilService = Math.ceil((new Date(this.serviceDate) - new Date()) / 86400000);
    return daysUntilService <= 60 && daysUntilService >= 0;
  }

  getOverdue() {
    return new Date(this.serviceDate) < new Date();
  }
}

// Driver Class
class Driver {
  constructor({ id, name, licenseType }) {
    Object.assign(this, { id, name, licenseType });
  }
}

// Instantiate vehicle and driver objects
const vObj = vehicle.map((elem) => new Vehicle(elem));
const dObj = driver.map((elem) => new Driver(elem));

// Calculate totals and aggregations
const totalVehicles = vObj.length;
const availableVehicles = vObj.filter((v) => v.available).length;
const unavailableVehicles = totalVehicles - availableVehicles;

// Fuel type distribution
let fuelTypes = {};
for (let v of vObj) {
  fuelTypes[v.fuel] = (fuelTypes[v.fuel] || 0) + 1;
}

// High mileage vehicles (over 100,000 km)
const highMileageVehicles = [];
for (const vehicle of vObj) {
  if (vehicle.mileage > 100000) {
    highMileageVehicles.push(vehicle);
  }
}


// Total drivers
const totalDriver = dObj.length;

// Vehicles due for service within the next 60 days
const dueForService = vObj.filter((elem) => elem.getDueDate());

// Vehicles overdue for service
const serviceOverdue = vObj.filter((elem) => elem.getOverdue());

// License type distribution
let licenseTypeDistribution = {};
for (let { licenseType } of dObj) {
  licenseTypeDistribution[licenseType] = (licenseTypeDistribution[licenseType] || 0) + 1;
}

// Driver assignments
let driverAssignments = [];
for (let elem of dObj) {
  const assignedCount = vObj.filter((v) => v.assignedDriverId === elem.id).length;
  driverAssignments.push({ driver: elem, assignedCount });
}

// Most active driver
let mostActiveDriver = driverAssignments.reduce((max, curr) => {
  return curr.assignedCount > max.assignedCount ? curr : max;
});

// Driver-to-vehicle ratio
const driverToVehicleRatio = (totalDriver / totalVehicles).toFixed(2);

// Report generation
const generateReport = () => {
  console.log(`
    Total Number of Vehicles: ${totalVehicles}
    Total Number of Available Vehicles: ${availableVehicles}
    Total Number of Unavailable Vehicles: ${unavailableVehicles}
  `);

  console.log('----- Fuel Type Distribution -----');
  for (let [fuel, count] of Object.entries(fuelTypes)) {
    console.log(`    ${fuel}: ${count}`);
  }

  console.log('---- Vehicles with Mileage Over 100,000 km ----');
  for (let v of highMileageVehicles) {
    console.log(`    ID: ${v.id}, Vehicle: ${v.type}, Mileage: ${v.mileage}`);
  }

  console.log('---- Vehicles Due for Service Within the Next 60 Days ----');
  for (let { id, serviceDate } of dueForService) {
    console.log(`    ID: ${id}, Service Date: ${serviceDate}`);
  }

  console.log(`
    Total Number of Drivers: ${totalDriver}
    ----- License Type Distribution -----
  `);
  for (let [licenseType, count] of Object.entries(licenseTypeDistribution)) {
    console.log(`    License Type: ${licenseType}: ${count}`);
  }

  console.log(`
    Most Active Driver: ${mostActiveDriver.driver.name} (${mostActiveDriver.assignedCount} vehicle(s) assigned)
  `);

  console.log(`Driver-to-Vehicle Ratio: ${driverToVehicleRatio}`);
};

// Recommendations function
const generateRecommendations = () => {
  console.log('-------------- Recommendations --------------');
  
  if (serviceOverdue.length > 0) {
    console.log(`${serviceOverdue.length} vehicle(s) are overdue for service. Immediate maintenance is required.`);
  }

  const unassignedVehicles = vObj.filter((v) => !v.assignedDriverId);
  if (unassignedVehicles.length > 0) {
    console.log(`${unassignedVehicles.length} vehicle(s) are unassigned. Consider reassigning drivers.`);
  }
};

// Execute the report and recommendations
generateReport();
generateRecommendations();
