// promise.all
// Promise.all takes an array of promises and returns a single promise that resolves when all of the input promises resolve, or rejects as soon as one of them rejects.

// const promise1  = Promise.resolve(3)
// const promise2 = 42
// const Promise3 = new Promise((res) =>  setTimeout(res , 100 , "fo0"))

// Promise.all([promise1 , promise2 , promise3]).then(v => {
//     console.log(v)
// }).catch(err => {
//     console.log(err)
// })

// #Promise.allSettled
// Promise.allSettled waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise.

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((_, reject) => setTimeout(reject, 100, 'error'));
// const promise3 = Promise.resolve(42);

// Promise.allSettled([promise1, promise2, promise3])
//   .then(results => {
//     console.log(results);
//     /*
//       [
//         { status: 'fulfilled', value: 3 },
//         { status: 'rejected', reason: 'error' },
//         { status: 'fulfilled', value: 42 }
//       ]
//     */
//   });

//   Promise.race
// ✅ Definition:
// Promise.race returns a promise that settles as soon as one of the input promises settles (resolves or rejects), with the value or reason from that first settled promise.

// const promise1 = new Promise(resolve => setTimeout(resolve, 500, 'one'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'two'));

// Promise.race([promise1, promise2])
//   .then(result => {
//     console.log(result); // "two"
//   });

// Promise.any
// ✅ Definition:
// Promise.any returns a single promise that resolves as soon as any one of the promises in the array resolves. If all of the promises reject, it rejects with an AggregateError.

// const promise1 = Promise.reject("Error 1");
// const promise2 = Promise.reject("Success");
// const promise3 = Promise.reject("Error 2");

// Promise.any([promise1, promise2, promise3])
//   .then(result => {
//     console.log(result); // "Success"
//   })
//   .catch(error => {
//     console.error(error);
//   });

// Promise.resolve
// ✅ Definition:
// Promise.resolve() returns a Promise that is resolved with the given value (or the value wrapped as a promise if it's already a promise).

const promise = Promise.resolve(10);
promise.then((val) => console.log(val));

const promiserejcet = Promise.reject(11);
promiserejcet.then((val) => console.log(val)).catch((err) => console.log(err));

const promisfinally = Promise.resolve(13);
promisfinally
  .then((val) => console.log(val))
  .catch((err) => console.log(err))
  .finally(() => console.log("finnaly executed after all prmise settle"));
