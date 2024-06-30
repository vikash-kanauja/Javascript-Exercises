function firstAsyncOperation(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("First operation was successful!");
        },2000)
    })
  
}
function secondAsyncOperation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("second operation was successful!");
       },2000)
   })
}

firstAsyncOperation()
.then((value)=> {
    console.log(value);
    return secondAsyncOperation()
})
.then((value2)=>console.log(value2))



// Using Async await

// function firstAsyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("First operation was successful!");
//         }, 2000);
//     });
// }

// function secondAsyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Second operation was successful!");
//         }, 2000);
//     });
// }

// async function runAsyncOperations() {
//     try {
//         const firstResult = await firstAsyncOperation();
//         console.log(firstResult);

//         const secondResult = await secondAsyncOperation();
//         console.log(secondResult);
//     } catch (error) {
//         console.error(error);
//     }
// }

// runAsyncOperations();
