const calaculateAverage = (arr) =>{
    let total = arr.reduce((accum,currEle) => accum+currEle ,0)
    return (total/arr.length).toFixed(2);
}
console.log(calaculateAverage([5,2,9,4,8,4]))