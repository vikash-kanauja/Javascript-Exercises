const sumOfSquareOfAllEle = (arr) =>{
   return arr.reduce((accum,currEle)=>accum+ (currEle*currEle),0)
}
console.log(sumOfSquareOfAllEle([2,5,9]));