function asyncFunction() {
  return new Promise((resolve, reject) => {
    let value = 7;
    if (value > 5) {
      return resolve("promise resolved");
    } else {
      return reject("promise rejected");
    }
  });
}

asyncFunction()
.then((value)=>console.log(value))
.catch(err => console.log(err))



// async function checkValue() {
//     let value = 3;
//     try {
//       let result = await new Promise((resolve, reject) => {
//         if (value > 5) {
//           resolve("promise resolved");
//         } else {
//           reject("promise rejected");
//         }
//       });
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   checkValue();
  