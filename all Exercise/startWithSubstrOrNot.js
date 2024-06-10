const startsWith = (str,subStr) =>{

    return str.slice(0,(subStr.length)).toLowerCase() === subStr.toLowerCase()
    // return str.startsWith(subStr)
}
console.log(startsWith("Hello world","Hello"));
console.log(startsWith("world Hello","hello"));
console.log(startsWith("Vikash","vikash"));

