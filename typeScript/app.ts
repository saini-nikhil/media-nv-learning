


//tuples
let user: [string  , number]  
 user = ["Nik" , 30 ]

//  user = [ 30 , "nik"]  wrong
console.log(user)


let scores: [string, ...number[]];
scores = ["Alice", 90, 85, 92]; // ✅


// let person: [string, number] = ["Bob", 25];
// let [name, age] = person;


function getUser(): [string, number] {
  return ["Charlie", 28];
}

const [userName, userAge] = getUser();





//enum --------------

enum Status {
  Success = 1,
  Failure = 0,
  Pending = 5
}

console.log(Status.Success); // 1
console.log(Status.Pending); // 5



enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Green); // "GREEN"



// interface


// interface User{
//     name: string,
//     email : string,
//     password : string ,
//     age : number,
//     isActive? : boolean  
// }

// function abcd(obj: User) {
//     console.log(obj)
// }


// abcd({name : "nik" , email : "abcd@gmail.com" , password: "asdf" , age: 10 })



// //interface  extends 
// interface User{
//     name: string,
//   email : string,
//   password : string
//   age : number
// }
// interface admin extends User{
//     isActive : boolean
// }

// const abcde : admin = {
//     name: "Nik",
//     age : 23,
//     isActive : true,
//     email: "abcd@",
//     password:"xyz"
// }

// console.log(abcde)


// more ex 
interface Person {
  name: string;
  age: number;
 
}

const john: Person = {
  name: "John",
  age: 30
};
console.log(john)
interface Employee extends Person {
  jobTitle: string;
}

const jane: Employee = {
  name: "Jane",
  age: 28,
  jobTitle: "Developer"
};



// /// more extend inter face
// interface Contact {
//   email: string;
//   phone: string;
// }

// interface Employee extends Person, Contact {
//   jobTitle: string;
// }

// const mike: Employee = {
//   name: "Mike",
//   age: 40,
//   email: "mike@example.com",
//   phone: "123-456-7890",
//   jobTitle: "Manager"
// };



// interface Product {
//   id: number;
//   name: string;
//   price?: number; // Optional property
//   readonly sku: string; // Read-only property
// }

// const product: Product = {
//   id: 1,
//   name: "Laptop",
//   sku: "LAP123"
// };

// product.sku = "NEWSKU123"; // Error: sku is read-only



// interface Greetable {
//   greet(): void;
// }

// class Person implements Greetable {
//   constructor(public name: string) {}

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person = new Person("Alice");
// person.greet(); // Output: Hello, my name is Alice



/// ----------------------------------------------------------------------------------------------------------------------------

//type aliases

type status = "active" | "inactive " | "pending"

let userStatus : status = "active"
userStatus = "inactive "

type mixed = number | string| boolean
let a : mixed = 10
a = "nik"




type Contact = {
  email: string;
  phone: string;
};

type Person1 = {
  name: string;
  age: number;
};

type Employee11 = Person1 & Contact & {
  jobTitle: string;
};

const employee: Employee11 = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  phone: "123-456-7890",
  jobTitle: "Developer"
};





// Example of Combining All Concepts
//  