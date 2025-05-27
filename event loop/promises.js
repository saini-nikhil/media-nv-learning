
// // /// cb is a callback function
// // function fetchuser(cb){
// //     setTimeout(()=> {
// //         cb({
// //             name: 'John',
// //             age: 30
// //         })
// //     } , 1000)
// // }
// // console.log("start")

// // fetchuser((user) => {
// //     console.log("user", user)
// // })

// // console.log("end")



// // // promises
// // function fetchuserPromise() {
// //     return new Promise((res , rej) => {
// //         setTimeout(()=>{
// //             res({id :2 , name :"Nik"})
// //         },1000)
// //     })
// // }

// // console.log("start")
// // fetchuserPromise().then((user) => {
// //     console.log("user" , user)
// // })

// // console.log("end")


// async function  fethcuserasyncawait(){
//     return new Promise((res , rej) =>{
//         setTimeout(()=>{
//             res({id: 3 , name: " kk"})
//         }, 0)
//     })

// }

// async function main(){

//      console.log("start")
//      const user = await fethcuserasyncawait()
//      console.log("user" , user)
//      console.log("enddd")

// }
// main()


// Task 1: Print numbers with delay (Event Loop + setTimeout)
// console.log("start")
//  for(let i = 1 ; i <= 10 ; i++){
// setTimeout(() => {
   
//         console.log(i)
//     },i*1000)
// }


// console.log("end")

// Delay Logger
// Can you write code that logs "Hello" immediately, and "World" exactly 1 second later, using only setTimeout?
// setTimeout(() => {
//     console.log("world")
// },1000)
// console.log("hello")



// Simulated Data Load with Callback
// How would you simulate fetching data from a server using a function that accepts a callback, and calls it after 2 seconds?
// function fetchdata(cb) {
//     setTimeout(() => {
//         cb({id : 1 , name : "nik"})
//     } , 2000 )

// }
// fetchdata((user) => {
//     console.log(user)
// })


// Callback Hell Scenario
// Can you write a series of dependent tasks (e.g., load user → load posts → load comments) using only callbacks?

// function getUser(cb){
//     setTimeout(() => {
//         console.log("user loaded")
//         cb({id : 2})
//     }, 1000)
// }
// function postUser(cb){
//     setTimeout(() => {
//         console.log("post loaded")
//         cb({id : 3})
//     },2000)
// }
// function commentsUser(cb){
//     setTimeout(() => {
//         console.log("comments loaded")
//         cb({id : 4})
//     },10000)
// }

// getUser((user) => {
//     console.log(user)
//     postUser((user2)=> {
//         console.log(user2)
//         commentsUser((user3) => {
//             console.log(user3)
//             console.log("end")
//         })

//     })

// })

// Basic Promise Resolution
// // How would you create a function that returns a Promise which resolves with "Done!" after 1 second?


//  Event Loop Based Questions
// Delay Logger
// Can you write code that logs "Hello" immediately, and "World" exactly 1 second later, using only setTimeout?

// Micro vs Macro
// What will be the order of logs if you mix Promise.then and setTimeout in the same script?

// 📞 Callback-Based Questions
// Simulated Data Load with Callback
// How would you simulate fetching data from a server using a function that accepts a callback, and calls it after 2 seconds?

// Callback Hell Scenario
// Can you write a series of dependent tasks (e.g., load user → load posts → load comments) using only callbacks?

// 📦 Promise-Based Questions
// Basic Promise Resolution
// How would you create a function that returns a Promise which resolves with "Done!" after 1 second?

// Promise Chain
// Can you perform three asynchronous steps in a row (e.g., login → fetch profile → log activity) using promise chaining?

// Error Handling in Promises
// How can you simulate a task that sometimes fails, and properly handle errors using .catch()?

// 🚀 Async/Await Based Questions
// Sequential Async Tasks
// How would you write an async function that fetches data, waits 1 second, then logs a message?

// Try/Catch with Async/Await
// Can you simulate a function that throws an error and catch it using try/catch inside an async function?

// Parallel Await with Promise.all
// Can you launch two independent tasks in parallel and wait for both to complete using async/await?



// // function question5(){
// //     return new Promise((res , rej) => {
// //         setTimeout(() => {
// //             res("done")
// //         } , 1000)
// //     })
// // }
// // question5().then((resolved)=> {
// //     console.log(resolved)
// // })


// // function question6(task , time){
// //     return new Promise((res) => {
// //         setTimeout(() => {
// //             console.log(task)
// //             res()
// //         } , time)

// //     })}
// // question6("login , user", 1000)
// //     .then(() => question6("fetch profile", 1000))
// //     .then(() => question6("log activity", 1000));






// // function question7(){
// //     return new Promise((res , rej) => {
// //         setTimeout(() => {
// //             // res("done")
// //             rej("promise rejected")
// //         } , 1000)
// //     })
// // }
// // question7().then((resolved)=> {
// //     console.log(resolved)
// // }).catch((err) => console.log(err))



// async function question8(){
//     try{
//   setTimeout(() => {
//     console.log("messege logs")
//     } , 1000  )
//     }
//     catch(err){
//         console.log(err)
//     }
  
// }
// question8()


// async function question9() {
//     // Simulating an error by throwing one
//     throw new Error("Something went wrong!");
// }

// async function run() {
//     try {
//         await simulateError();  // Call the function that throws an error
//     } catch (error) {
//         console.log("Caught an error:", error.message);
//     }
// }

// // run();




async function task1(){
    return new Promise(res => {
        setTimeout(() => {
           console.log("tasl 1 complted") 
           res("task 1 ")
        }, 2000);
    })
}
async function task2(){
    return new Promise(res => {
        setTimeout(() => {
           console.log("tasl 2 complted") 
           res("task 2 ")
        }, 1000);
    })
}

async function question10()
{
    try{
        const res = await Promise.all([task1() , task2()]) 
        console.log("both task complted" , res)
    
} catch (error) {
    console.error("Error:", error);
}

}
question10()