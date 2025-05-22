// // arr = [1,2,3,4,5]

// // const [a,b,c,d,e] = arr
// // console.log(a) // 1
// // console.log(b) // 2
// // console.log(c) // 3
// // console.log(d) // 4
// // console.log(e) // 5


// //Skipping Elements:

// // const [first , , third] = arr
// // console.log(first) // 1
// // console.log(third) // 3




// // //Using Default Values:

// // let newarr = [1,2,3]
// // const [a , b , c , d= 4] = newarr
// // console.log(a) // 1
// // console.log(b) // 2

// // console.log(c) // 3
// // console.log(d) // 4
// // d will be 4 because it is not defined in the array

// // Swapping Variables:
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// // let x = 1;
// // let y = 2;
// // [x, y] = [y, x]; // ✅ This is correct

// console.log(x) // 2 
// console.log(y) // 1

// // Nested Destructuring:
// const nestedArr = [1, 2, [3, 4]];
// const [a, b, [c, d]] = nestedArr;
// console.log(a) // 1
// console.log(b) // 2
// console.log(c) // 3
// console.log(d) // 4



// // Destructuring Objects:
// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const { name, age, city } = obj;
// console.log(name) // John
// console.log(age) // 30
// console.log(city) // New York

// // Nested Destructuring with Objects:
// const nestedObj = {
//   person: {
//     name: "John",
//     age: 30
//   },
//   city: "New York"
// };
// const { person: { name: personName, age: personAge }, city: personCity } = nestedObj;
// console.log(personName) // John



//
// Default Values with Objects:
// const person = { name: "Alice" };

// // Default value for age
// const { name, age = 30 } = person;

// console.log(name); // 'Alice'
// console.log(age);  // 30 (default value)


//Destructuring with Rest Syntax:

// const person1 = { name: "Alice", age: 25, country: "USA" };

// const { name, ...rest } = person1;
// console.log(name); // 'Alice'
// console.log(rest); // { age: 25, country: 'USA' }

// Combining Array and Object Destructuring:

const data = {
    id: 1,
    name: "John",
    hobbies: ["reading", "gaming", "coding"]
    };
const { id, name, hobbies: [hobby1, hobby2] } = data;




