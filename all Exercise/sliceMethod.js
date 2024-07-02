let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["Banana", "Cherry"]
console.log(fruits);       // ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// Example 2

let slicedFruitsNegative = fruits.slice(-3, -1);
console.log(slicedFruitsNegative); // ["Cherry", "Date"]


// Example 3

let slicedFruitsFromIndex = fruits.slice(2);
console.log(slicedFruitsFromIndex); // ["Cherry", "Date", "Elderberry"]

// Example 4

let greeting = "Hello, World!";

let slicedGreeting = greeting.slice(7, 12);

console.log(slicedGreeting); // "World"
console.log(greeting);       // "Hello, World!"

// Example 5
let slicedGreetingNegative = greeting.slice(-6, -1);

console.log(slicedGreetingNegative); // "World"

// Example 6
let slicedGreetingFromIndex = greeting.slice(7);

console.log(slicedGreetingFromIndex); // "World!"
