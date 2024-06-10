const toCamelCase =(str)=>{
    let arr = str.trim().split(" ");
    arr=arr.map((currEle,index)=>{
        if(index===0){
            return currEle;
        }else{
            return currEle.charAt(0).toUpperCase() + currEle.slice(1);
        }
    })
    return arr.join("")

}

console.log(toCamelCase("find prime number in the given array"));
console.log(toCamelCase("find odd and even number in the given array"));
console.log(toCamelCase("find prime number in the given string"));
