"use strict";
//tuples
let user;
user = ["Nik", 30];
//  user = [ 30 , "nik"]  wrong
console.log(user);
let scores;
scores = ["Alice", 90, 85, 92]; // ✅
// let person: [string, number] = ["Bob", 25];
// let [name, age] = person;
function getUser() {
    return ["Charlie", 28];
}
const [userName, userAge] = getUser();
//enum --------------
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failure"] = 0] = "Failure";
    Status[Status["Pending"] = 5] = "Pending";
})(Status || (Status = {}));
console.log(Status.Success); // 1
console.log(Status.Pending); // 5
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Green); // "GREEN"
const john = {
    name: "John",
    age: 30
};
console.log(john);
const jane = {
    name: "Jane",
    age: 28,
    jobTitle: "Developer"
};
let userStatus = "active";
userStatus = "inactive ";
let a = 10;
a = "nik";
const employee = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    phone: "123-456-7890",
    jobTitle: "Developer"
};
// Example of Combining All Concepts
//  
