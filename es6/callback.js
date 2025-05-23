//  function washClothes(time, callback) {
//         setTimeout(() => {
//           console.log("Clothes are washed!");
//           callback();
//         }, time); // Washing takes time specified in milliseconds
//       }

//       function dryClothes(time, callback) {
//         setTimeout(() => {
//           console.log("Clothes are dry!");
//           callback();
//         }, time); // Drying takes time specified in milliseconds
//       }

//       function foldClothes(time) {
//         setTimeout(() => {
//           console.log("Clothes are folded!");
//         }, time); // Folding takes time specified in milliseconds
//       }

//       // Sequentially process clothes by passing callback functions correctly
//       washClothes(2000, () => {
//         dryClothes(3000, () => {
//           foldClothes(2000);
//         });
//       });



 function washClothes(time, callback) {
        setTimeout(() => {
          console.log("Clothes are washed!");
          callback();
        }, time);
      }

      function dryClothes(time, callback) {
        setTimeout(() => {
          console.log("Clothes are dry!");
          callback();
        }, time);
      }

      function foldClothes(time, callback) {
        setTimeout(() => {
          console.log("Clothes are folded!");
          callback();
        }, time);
      }

      function ironClothes(time, callback) {
        setTimeout(() => {
          console.log("Clothes are ironed!");
          callback();
        }, time);
      }

      function wearClothes(time) {
        setTimeout(() => {
          console.log("Clothes are worn!");
        }, time);
      }

      // Sequentially process clothes by passing callback functions correctly
      washClothes(2000, () => {
        dryClothes(3000, () => {
          foldClothes(2000, () => {
            ironClothes(1000, () => {
              wearClothes(1000);
            });
          });
        });
      });