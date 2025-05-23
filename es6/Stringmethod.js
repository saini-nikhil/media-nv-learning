// //  charAt

// let str = "Hello World"
// console.log(str.charAt(0)) // H
// console.log(str.charAt(1)) // e

// // charCodeAt

// console.log(str.charCodeAt(0)) // 72
// console.log(str.charCodeAt(1)) // 101

// // concat`
// let str1 = "Hello"
// let str2 = "World"
// let str3 = str1.concat(" ", str2)
// console.log(str3) // Hello World`

// // includes
// console.log(str.includes("H")) // true

// //startsWith
// console.log(str.startsWith("H")) // true
// console.log(str.startsWith("h")) // false
// console.log(str.startsWith("Hello")) // true


// // endsWith
// console.log(str.endsWith("d")) // true
// console.log(str.endsWith("D")) // false
// console.log(str.endsWith("World")) // true

// // indexOf
// console.log(str.indexOf("ll")) // 0
// console.log(str.indexOf("h")) // -1

// // lastIndexOf
// console.log(str.lastIndexOf("l")) // 9
// console.log(str.lastIndexOf("H")) // 0
// console.log(str.lastIndexOf("h")) // -1

// //replace
// let str4 = str.replace("World", "JavaScript")
// console.log(str4) // Hello JavaScript


// //replaceAll
// let str5 = str.replaceAll("l", "L")
// console.log(str5) // HelLo WorLd

// //substring
// console.log(str.substring(0, 5)) // Hello
// console.log(str.substring(6, 11)) // World

// //substr
// console.log(str.substr(0, 5)) // Hello
// console.log(str.substr(6, 5)) // World

// //toLowerCase
// console.log(str.toLowerCase()) // hello world

// //toUpperCase
// console.log(str.toUpperCase()) // HELLO WORLD

// //trim
// let str6 = "   Hello World   "
// console.log(str6.trim()) // Hello World


// //trimStart
// console.log(str6.trimStart()) // Hello World
// //trimEnd
// console.log(str6.trimEnd()) // Hello World
// //split
// let str7 = "Hello,World,JavaScript"
// let arr = str7.split(",")
// console.log(arr) // [ 'Hello', 'World', 'JavaScript' ]

// //split with limit
// let arr1 = str7.split(",", 2)
// console.log(arr1) // [ 'Hello', 'World' ]

// //repeat
// let str8 = "Hello"
// let str9 = str8.repeat(3)
// console.log(str9) // HelloHelloHello


// //padStart
// let str10 = "5"
// let str11 = str10.padStart(3, "0")
// console.log(str11) // 005

// //padEnd
// let str12 = "5"
// let str13 = str12.padEnd(3, "0")
// console.log(str13) // 500

// //localeCompare
// let str14 = "Hello"
// let str15 = "hello"
// console.log(str14.localeCompare(str15)) // -1
// console.log(str15.localeCompare(str14)) // 1


// // match
// let str16 = "Hello World"
// let regex = /l/g
// let match = str16.match(regex)

// console.log(match) // [ 'o', 'o' ]


