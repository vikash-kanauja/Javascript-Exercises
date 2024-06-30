const promiseResult = new Promise((resolve, reject) => {
  let value = 3;
  if (value > 5) {
    return resolve("promise resolved");
  } else {
    return reject("promise rejected");
  }
});
promiseResult
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
