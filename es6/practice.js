// // const n = 10
// // n = 11
// // console.log(n)
// // // n = 11 // TypeError: Assignment to constant variable.


// const arr = [1, 2, 3, 4, 5]
// arr[0] = 10
// console.log(arr) // [ 10, 2, 3, 4, 5 ]


// class Product {
//     constructor(name , price , category){
//         this.name = name
//         this.price = price
//         this.category = category
//     }

//     getDiscountedPrice(percent){
//         return this.price - (this.price * percent / 100)
//     }
// }

// const product1  = new Product("Laptop" , 1000 , "Electronics")
// console.log(product1.getDiscountedPrice(10)) // 900



// class  Emp {
//     constructor(name , age , salary){
//         this.name = name
//         this.age = age
//         this.salary = salary
//     }

//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`
//     }
// }

// const emp1 = new Emp("nik" , 30 , 50000)
// const emp2 = new Emp("abc" , 25 , 60000)


// console.log(emp1.getDetails()) 
// console.log(emp2.getDetails()) 


// function isEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// const isEvenOrOddA = (num)=> {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// const isEvenOrOddB = (num) => num % 2 === 0 ? "Even" : "Odd";

// console.log(isEvenOrOddA(5)) // Even


// let arr1 = [1, 2, 3, 4, 5]
// const sqr = arr1.map((elem) =>  elem * 2)
// console.log(sqr) 


// const even = arr1.filter((elem) => elem%2 ==0)
// console.log(even) // [ 2, 4 ]

// const fruits = ["apple", "banana", "cherry"]

// let upper = fruits.map((fruit) => {
//    return  fruit.toUpperCase()
//     console.log(fruit)
// })

// console.log(upper)





// const cart = [
//   { product: "Laptop", price: 50000 },
//   { product: "Phone", price: 20000 },
//   { product: "Mouse", price: 1000 }
// ];


// const totalPRice = cart.reduce((acc , item)=> {
//     return acc + item.price
// }, 0)

// console.log(totalPRice)


// const inventory = [
//   { name: "Pen", quantity: 20 },
//   { name: "Notebook", quantity: 15 },
//   { name: "Eraser", quantity: 30 }
// ];


// const names = inventory.forEach((elem) => {
//     console.log(elem.name , elem.quantity)
// })


// const str = "hello javascript"
// console.log(str.includes("javascript"))


// let username = "nikhil123"
// console.log(/^[a-zA-z].*\d$/.test(username)) // true


// console.log("welcome".repeat(3)) // welcomewelcomewelcome



// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 50000,
//   inStock: true
// };

// function displayProductDetails(obj){
// console.log(Object.keys(obj)) // [ 'id', 'name', 'price', 'inStock' ]
// console.log(Object.values(obj)) // [ 101, 'Laptop', 50000, true ]
// }

// displayProductDetails(product) 

// const student = {
// //   rollNo: 25,
// //   name: "Aman",
// //   course: "Web Development",
// //   batch: "May 2025"
// // };


// // console.log(Object.entries(student))

// // let person = { name: "Nikhil", age: 21 }
// // const {name , age}= person
// // console.log(name) // Nikhil
// // console.log(age) // 21

// // let arrrr = [1, 2, 3, 4, 5]

// // const [a, b] = arrrr
// // console.log(a) // 1
// // console.log(b) // 2


// // function template(name , notification){
// //     console.log(`hello ${name} , you have a ${notification} new notification`);
    
// // }

// // template("nikhil" , 5) 


// // function fetchdata(){
// //     return new Promise((res , rej)=> {
// //         let success = true
// //         if(success){
// //             res(["Data fetched successfully" , "Data 2" , "Data 3"])
// //         }else{
// //             rej("Error fetching data")
// //         }
// //     })
// // }

// // fetchdata()
// //     .then((data) => {
// //         console.log(data)
// //         return data
// //     })
// //     .then((data) => {  
// //         console.log(data.length)
// //     })
// //     .catch((error) => {
// //         console.log(error)
// //     })


// const user = {
//   id: 1,
//   name: "Nikhil",
//   address: {
//     city: "Moradabad",
//     geo: {
//       lat: "28.8",
//       lng: "78.7"
//     }
//   }
// };

// const {id , name, address: {city  , geo: {lat , lng}}} = user

// console.log(id) // 1
// console.log(name) // Nikhil
// console.log(city) // Moradabad
// console.log(lat) // 28.8
// console.log(lng) // 78.7


// Merge and Deduplicate Arrays using Set and Spread
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const merge = new Set([...arr1, ...arr2])

console.log(merge) 

// const users = [
//   { name: "Nikhil", city: "Moradabad" },
//   { name: "Aman", city: "Delhi" },
//   { name: "Riya", city: "Moradabad" },
//   { name: "Sam", city: "Mumbai" },
//   { name: "Kiran", city: "Delhi" },
//   { name: "Zoya", city: "Mumbai" }
// ];


const users = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
  { name: "D", age: 17 }
];

const filter = users.filter((user) => user.age >= 18).map((user) => user.name).reduce((acc, name, index, arr) => {
    return acc + (index < arr.length - 1 ? name + ", " : name);
  }, "")

console.log(filter) // [ 'B', 'C' ]



function validatePassword(password) {
  const regex = /^[a-zA-Z](?=.*\d).{5,}$/;
  return regex.test(password);
}
console.log(validatePassword("abc123")) // true



class product {
    constructor(name , price , quantity){
        this.name   = name
        this.price = price
        this.quantity = quantity
}
    getTotalPrice(){
        return this.price * this.quantity
    }
    getdiscount(percent){
        return this.price - (this.price * percent / 100)
    }
}

const p1 = new product("Laptop" , 50000 , 2) 
const p2 = new product("Phone" , 20000 , 3)
const p3 = new product("Tablet" , 15000 , 4)

console.log(p1.getTotalPrice() , p1.getdiscount(10)) 
console.log(p2.getTotalPrice() , p1.getdiscount(10)) 
console.log(p3.getTotalPrice() , p1.getdiscount(10)) 