// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     getName: function() {
//         console.log("name- " , this.name);
//     },
// } 
// person.getName()
// const person2 = {
//     name: "Jane",
//     age: 25,
//     city: "Los Angeles",
//     getName: function() {
//         console.log("name- " , this.name);
//     },
// }

// const person3 = {
//     name: "Doe",
//     age: 35,
//     city: "Chicago",
//     getName: function() {
//         console.log("name- " , this.name);
//     },
// }

// person.getName()
// person2.getName()
// person3.getName()

// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.getName = function() {
//         console.log("name- " , this.name);
//     }
// }
// // const person1 = new Person("John", 30, "New York");
// console.log(person1);

class PersonClass{
    constructor(fname , lname , age){
       Object.assign(this , {fname , lname , age})
    }
    getName(){
        console.log("Name :" ,  this.fname  , this.lname);
    }
    getAge(){
        console.log("Age :" , this.age);
    }
    
}
const p2 = new PersonClass("Nik" , "saini" , 23);
const p3 = new PersonClass("John" , "Doe" , 30);
const p4 = new PersonClass("Jane" , "Doe" , 25);

p3.getAge()
p2.getName()
