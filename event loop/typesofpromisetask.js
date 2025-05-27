// 1. Basic Promise Creation
// Task:
// Write a function getData() that returns a Promise which resolves with the string "Data received" after 1 second.

// 🔹 2. Promise with Rejection
// Task:
// Create a function fetchUser() that randomly resolves with { id: 1, name: "Nik" } or rejects with "User not found". Handle both cases using .then() and .catch().

// 🔹 3. Chained Promises
// Task:
// Create a chain of Promises where:

// The first resolves with a number (e.g., 5),

// The second multiplies it by 2,

// The third subtracts 3,

// Final result should be logged using .then() chaining.

// 🔹 4. Promise.all (Parallel)
// Task:
// You have three functions taskA(), taskB(), and taskC() that each return a Promise resolving after different times. Run them in parallel and wait for all to complete using Promise.all().

// 🔹 5. Promise.race (First Resolved Wins)
// Task:
// Create two Promises: one that resolves in 2 seconds and one in 1 second. Use Promise.race() to get whichever finishes first and log the result.

// 🔹 6. Promise.allSettled (All Outcomes)
// Task:
// Create three Promises: one resolves, one rejects, and one resolves again. Use Promise.allSettled() to get the status of all and log the array of results.

// 🔹 7. Promise.any (First Fulfilled)
// Task:
// // Create four Promises: three that reject with errors, and one that resolves after 2 seconds. Use Promise.any() and log the first successfully resolved value.

// function question1(){
//     return new Promise((res , rej) => {
//         let promise = true
//         if(promise){
//             setTimeout(() => {
//            res("Data Recived")
//             } , 1000)
            
//         }else{
//             rej("")
//         }
//     })
// }
// question1().then((ans) => console.log(ans))



// function question2(){
//     return new Promise((res , rej) => {
//         let sucess = Math.random() > 0.5
//         console.log(sucess , )
    
//         setTimeout(() => {
//             if(sucess){
//                 res("promise resolved")
//             }else{
//                 rej("promise rejected")
//             }
            

//         } , 0)
//     })
// }
// question2().then((ans) =>  console.log(ans)).catch((err) => console.log(err))




// function question3(num){
//     return new Promise((res , rej) => {
//         res(5)
//     })
//     .then((res) => {
//         console.log("Initial value:", res);
//         return res * 2; 
//     })
//     .then((res) => {
//         console.log("second value" , res)
//         return res -3

//     }).then((res) => {
//         console.log("Final result after subtracting 3:", res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// }

// question3()


// function task1(){
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("Task A resolved")
//             res("Task A")
//         } , 5000)
//     })
// }
// function task2(){
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("Task b resolved")
//             res("Task b")
//         } , 2000)
//     })
// }
// function task3(){
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("Task c resolved")
//             res("Task c")
//         } , 3000)
//     })
// }

// async function Questions4(){
//     try {
//         let promise = await Promise.all([task1() , task2() , task3()])
//         console.log(promise)
//     } catch (error) {
//         console.log("err" , error)
//     }

// }


// // Questions4()

// async function question5(){
//     try {
//         const promise = await Promise.all([task1() , task2()])
//         console.log(promise)
        
//     } catch (error) {
//           console.log("err" , error)
//     }
// }

// question5()


// function task1(){
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("Task A resolved")
//             res("Task A")
//         } , 1000)
//     })
// }
// function task2(){
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("Task b rejected")
//             rej("Task b")
//         } , 3000)
//     })
// }
// function task3(){
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             console.log("Task c resolved")
//             res("Task c")
//         } , 5000)
//     })
// }

// async function question6(){
//     try {
//         const promise = await Promise.allSettled([task1() , task2() , task3()])
//         console.log(promise)
        
//     } catch (error) {
//           console.log("err" , error)
//     }
// }
// question6()


function task1(){
    return new Promise((res , rej) => {
        setTimeout(() => {
            console.log("Task A rejected")
            rej("Task A")
        } , 0)
    })
}
function task2(){
    return new Promise((res , rej) => {
        setTimeout(() => {
            console.log("Task b rejected")
            rej("Task b")
        } , 0)
    })
}
function task3(){
    return new Promise((res , rej) => {
        setTimeout(() => {
            console.log("Task c rejected")
            rej("Task c")
        } , 0)
    })
}
function task4(){
    return new Promise((res , rej) => {
        setTimeout(() => {
            console.log("Task d resolve")
            res("Task d")
        } , 2000)
    })
}

async function question6(){
    try {
        const promise = await Promise.any([task1() , task2() , task3() , task4()])
        console.log(promise)
        
    } catch (error) {
          console.log("err" , error)
    }
}
question6()