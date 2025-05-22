

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

//Object.keys 

console.log(Object.keys(obj)) // [ 'name', 'age', 'city' ]



//object.values

console.log(Object.values(obj)) // [ 'John', 30, 'New York' ]

//object.entries
console.log(Object.entries(obj)) // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

//object.assign
let obj1 = {
    name: "John",
   
  
}
let obj2 = {
    name :"Nik`",
    age: 25,
    city: "Los Angeles"
}

let updatedObj = Object.assign(obj1, obj2)
console.log(updatedObj) // { name: 'Jane', age: 25, city: 'Los Angeles' }

//object.freeze
const person = {
    name: "John",
    age: 30,
    city: "New York"
}
Object.freeze(person)
person.name = "Jane" // will not change the name
console.log(person.name) // John



//object.seal
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
}
Object.seal(person1)
person1.name = "Jane" // will change the name
console.log(person1.name) // Jane
person1.country = "USA" // will not add the country
console.log(person1.country) // undefined


//object.create
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
}
const person3 = Object.create(person2)
person3.name = "Jane"
person3.age = 25    
console.log(person3.name) // Jane
console.log(person3.age) // 25
console.log(person3.city) // New York
console.log(person2.isPrototypeOf(person3)) // true
console.log(person3.isPrototypeOf(person2)) // false




