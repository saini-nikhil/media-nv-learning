// Arrow Function 

// 1 . syntax
const sayhi = () => {
    console.log("hi");
}


// 2 .  "arguments" keyword



// const shownumberA = () => {
//     console.log(arguments);
// }

const shownumber = (...args) => {
    console.log(args);
}

// 3 .  "this" keyword

const person = {
    name: "John",
    age: 30,
    city: "New York",
    getName: function() {
        console.log("name- " , this.name);
    },
    getNameArrow: () => {
        console.log("name- " , this.name); 
    }
}

person.getName() // John
person.getNameArrow() // undefined

// 4 .  Hoisting

sayhi2() // hi
const sayhi2 = () => {
    console.log("hi");
}

