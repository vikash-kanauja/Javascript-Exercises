const checkTriangleType = (a,b,c) =>{
    if(a===b && b===c){
        return "equilateral";"isosceles"
    }
    if(a===b || b===c || a===c){
        return "isosceles";
    }
    return "scalene"
}
console.log(checkTriangleType(3,4,5))
console.log(checkTriangleType(3,4,3))
console.log(checkTriangleType(3,3,3))
