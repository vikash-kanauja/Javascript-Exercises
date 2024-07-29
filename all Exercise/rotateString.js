function rotateString(str, n) {
    n = n % str.length;
    return str.slice(n) + str.slice(0,n);
  }
console.log(rotateString("vikashkanaujia",16));


// const fruits = ["apple", "banana", "date"];
// fruits.splice(1, 0, "cherry", "fig");
// console.log(fruits); // Output: ["apple", "cherry", "fig", "banana", "date"]
