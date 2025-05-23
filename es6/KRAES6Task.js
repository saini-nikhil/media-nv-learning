// Build a fleet management system that processes the provided data to generate a detailed analytics report for a logistics company.
// Define ES6 classes for  Vehicle and Driver.
// Instantiate objects using the provided fleetData.
// Use ES6 features such as let/const,  arrow functions, template literals, destructuring, array and string methods, object utilities, and Promises.
// Calculate and display:
// Total vehicles and their availability status     done
// Number of vehicles by fuel type                  done
// Vehicles with mileage over 100,000 km            done
// Vehicles due for service within the next 60 days
// Total drivers and license type distribution (A) done
// Most active driver based on assigned vehicles
// Driver-to-vehicle ratio  done
// Automated recommendations based on:
// Service overdue
// Vehicle reassignments
// All logs must use template literals and display real-time calculated data
// Output the results in the exact report format below.
// Add clear console.log statements demonstrating your use of ES6 features.

const { vehicle, driver } = require("./db");

// const vehicle = [
//   {
//     id: "V001",
//     type: "Truck",
//     fuel: "Diesel",
//     mileage: 120000,
//     available: true,
//     serviceDate: "2025-07-10",
//     assignedDriverId: "D002",
//   },
//   {
//     id: "V002",
//     type: "Car",
//     fuel: "Petrol",
//     mileage: 80000,
//     available: false,
//     serviceDate: "2024-05-15",
//     assignedDriverId: "D001",
//   },
//   {
//     id: "V003",
//     type: "Bike",
//     fuel: "Petrol",
//     mileage: 50000,
//     available: true,
//     serviceDate: "2023-12-01",
//     assignedDriverId: "D001",
//   },
//   {
//     id: "V004",
//     type: "Truck",
//     fuel: "Diesel",
//     mileage: 150000,
//     available: true,
//     serviceDate: "2025-01-20",
//     assignedDriverId: "D003",
//   },
//   {
//     id: "V005",
//     type: "Truck",
//     fuel: "CNG",
//     mileage: 160000,
//     available: false,
//     serviceDate: "2025-01-20",
//     assignedDriverId: null,
//   },
// ];

// const driver = [
//   { id: "D001", name: "nik", licenseType: "A" },
//   { id: "D002", name: "xyz", licenseType: "B" },
//   { id: "D003", name: "abc", licenseType: "C" },
//   { id: "D004", name: "nik", licenseType: "D" },
//   { id: "D005", name: "nik2", licenseType: "D" },
// ];


class Vehicleclass {
  constructor({
    id,
    type,
    fuel,
    mileage,
    available,
    serviceDate,
    assignedDriverId,
  }) {
    Object.assign(this, {
      id,
      type,
      fuel,
      mileage,
      available,
      serviceDate,
      assignedDriverId,
    });
  }
  getdueDate() {
    const servicedate = new Date(this.serviceDate);
    const todaydate = new Date();
    const timedif = servicedate - todaydate;
    const daydif = Math.ceil((timedif / 1000) * 60 * 60 * 24);

    return daydif >= 60;
  }

  getOverdue() {
    return new Date(this.serviceDate) < new Date();
  }
}

class DriverClass {
  constructor({ id, name, licenseType }) {
    Object.assign(this, { id, name, licenseType });
  }
}

const vObj = vehicle.map((elem) => new Vehicleclass(elem));
const dObj = driver.map((elem) => new DriverClass(elem));

const totalVehicles = vObj.length;
const availableVehicles = vObj.filter((v) => v.available).length;
const unavailableVehicles = totalVehicles - availableVehicles;

const fuelType = vObj.reduce((acc, vehicle) => {
  const fuel = vehicle.fuel;

  if (acc[fuel]) {
    acc[fuel] = acc[fuel] + 1;
  } else {
    acc[fuel] = 1;
  }

  return acc;
}, {});

const highMileageVehicles = vObj.filter(({ mileage }) => mileage > 100000);

const totalDriver = dObj.length;

const dueForService = vObj.filter((elem) => elem.getdueDate());

const serviceOverdue = vObj.filter((elem) => elem.getOverdue());


const licenseTypeDistribution = dObj.reduce((acc, driver) => {
  const licenseType = driver.licenseType;
  if (acc[licenseType]) {
    acc[licenseType] = acc[licenseType] + 1;
  } else {
    acc[licenseType] = 1;
  }
  return acc;
}, {});

// const driverAssignments = dObj.filter( d => vObj.some(v => v.assignedDriverId === d.id)
const driverAssignments = dObj.map((elem) => ({
  driver: elem,
  assignedCount: vObj.filter((v) => v.assignedDriverId === elem.id).length,
}));

const mostActiveDriver = driverAssignments.reduce((max, curr) =>
  curr.assignedCount > max.assignedCount ? curr : max
);

const driveToVehiclRatio = totalDriver / totalVehicles;
// console.log(driveToVehiclRatio);

const genratereport = () =>  {
  console.log(`
        Total Number of Vehicles : ${totalVehicles}  \n
        Total Number fo AvailableVechicles : ${availableVehicles} \n
        Total Number of UnavailableVehicles : ${unavailableVehicles} 
                     `);

  

  console.log(`     -----Fuel Distribution-----   `);
  for (let [fuel, count] of Object.entries(fuelType)) {
    console.log(`       \t      ${fuel}: ${count}     `);
  }
  console.log(`----Vehicles with mileage over 100,000 km-----`);
  highMileageVehicles.map((elem) =>
    console.log(
      ` \tid: ${elem.id}  Vehicle : ${elem.type} , \n\t Mileage : ${elem.mileage}`
    )
  );

  console.log(`
    Vehicles due for service within the next 60 days 
     `);
  dueForService.forEach(({ id, serviceDate }) => {
    console.log(`     ${id} (Service Date: ${serviceDate})
        `);
  });

  console.log(
    `\n\t Total number of Driver : ${totalDriver} \n
    ----- License type distribution  -------\n`
  );
  for (let [licenseType, count] of Object.entries(licenseTypeDistribution)) {
    console.log(`\tLicense type : ${licenseType}: ${count} \n`);
  }

  console.log(
    `  \t Most Active Driver: ${mostActiveDriver.driver.name} (${mostActiveDriver.assignedCount} vehicle(s) assigned )
    `
  );

  console.log(` Driver-to-vehicle ratio : ${driveToVehiclRatio} 
    `);
}
genratereport();

const recommendations = () => {
    console.log(`--------------Recommendations----------`)
  if (serviceOverdue.length > 0) {
    console.log(
      `  ${serviceOverdue.length} vehicle(s) are overdue for service. Immediate maintenance is required. \n`
    );
  }

  const unassignedVehicles = vObj.filter((v) => !v.assignedDriverId);
  // console.log(unassignedVehicles)

  if (unassignedVehicles.length > 0) {
    console.log(
      ` ${unassignedVehicles.length} vehicle(s) are unassigned. Consider reassigning drivers.\n`
    );
  }
  //   console.log("reco" , arr)
};
recommendations();
