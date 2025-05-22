//for Each

const num = [1, 2, 3, 4, 5];
// let box = [] // forEach method will not return anything that take extra sapce in memory
// num.forEach((num) => {
//     box.push(num * 2);
//   console.log(box);
// });



// let mapp = num.map((elem) => {
//     // console.log(elem *2);
//     return elem * 2; // map method will return a new array wihtout changing the original array
// })

// console.log(mapp)


// find

let ans = num.find((elem) => elem === 0)
console.log(ans) // 4


// findIndex
let ans1 = num.findIndex((elem) => elem === 4)
console.log(ans1) // 3


//includes

let ans2 = num.includes(4) 
console.log(ans2) // true


//filter

let ans3 = num.filter((elem) => elem %2 === 0)
console.log(ans3) // [2, 4]


// reduce 


//without intial value
let ans4 = num.reduce((acc , elem) => {
    return acc + elem
})

// with intial value
let ans5 = num.reduce((acc , elem) => {
    return acc + elem 
},10)

console.log(ans5) // 25


//shift
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits.shift())
console.log(fruits) // ['banana', 'orange']

//unshift
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits1 = ['banana', 'orange'];
console.log(fruits1.unshift('apple'))
console.log(fruits1) // ['apple', 'banana', 'orange']


//concat
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let fruits2 = ['apple', 'banana'];
let vegetables = ['carrot', 'broccoli'];
let food = fruits2.concat(vegetables);
console.log(food) // ['apple', 'banana', 'carrot', 'broccoli']


//slice
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.

let fruits3 = ['apple', 'banana', 'orange', 'kiwi'];
let citrus = fruits3.slice(1, 3);
console.log(citrus) // ['banana', 'orange']


//splice
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let fruits4 = ['apple', 'banana', 'orange', 'kiwi'];
fruits4.splice(1, 2, 'grape');
console.log(fruits4) // ['apple', 'grape', 'mango', 'kiwi'] 