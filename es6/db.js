const vehicle = [
  {
    id: "V001",
    type: "Truck",
    fuel: "Diesel",
    mileage: 120000,
    available: true,
    serviceDate: "2025-07-10",
    assignedDriverId: "D002",
  },
  {
    id: "V002",
    type: "Car",
    fuel: "Petrol",
    mileage: 80000,
    available: false,
    serviceDate: "2024-05-15",
    assignedDriverId: "D001",
  },
  {
    id: "V003",
    type: "Bike",
    fuel: "Petrol",
    mileage: 50000,
    available: true,
    serviceDate: "2023-12-01",
    assignedDriverId: "D001",
  },
  {
    id: "V004",
    type: "Truck",
    fuel: "Diesel",
    mileage: 150000,
    available: true,
    serviceDate: "2025-01-20",
    assignedDriverId: "D003",
  },
  {
    id: "V005",
    type: "Truck",
    fuel: "CNG",
    mileage: 160000,
    available: false,
    serviceDate: "2025-01-20",
    assignedDriverId: null,
  },
];

const driver = [
  { id: "D001", name: "nik", licenseType: "A" },
  { id: "D002", name: "xyz", licenseType: "B" },
  { id: "D003", name: "abc", licenseType: "C" },
  { id: "D004", name: "nik", licenseType: "D" },
  { id: "D005", name: "nik2", licenseType: "D" },
];


module.exports = { driver, vehicle }
