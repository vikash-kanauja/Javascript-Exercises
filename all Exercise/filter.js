let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

let numbers1 = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers1.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]

let strings = ["hi", "hello", "hey", "welcome"];
let longStrings = strings.filter((str) => str.length > 3);
console.log(longStrings); // Output: ["hello", "welcome"]

let numbers2 = [-10, 15, -20, 30, -5, 40];
let positiveNumbers = numbers2.filter((num) => num > 0);
console.log(positiveNumbers); // Output: [15, 30, 40]

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
];
let adults = users.filter((user) => user.age >= 18);
console.log(adults); // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 20 }]

let products = [
  { name: "Laptop", specs: { ram: 16, cpu: "i7" } },
  { name: "Tablet", specs: { ram: 4, cpu: "i5" } },
  { name: "Phone", specs: { ram: 8, cpu: "i3" } },
];
let highRamProducts = products.filter((product) => product.specs.ram >= 8);
console.log(highRamProducts); // Output: [{ name: "Laptop", specs: { ram: 16, cpu: "i7" } }, { name: "Phone", specs: { ram: 8, cpu: "i3" } }]

let values = [0, "hello", false, 42, "", null, "world"];
let truthyValues = values.filter(Boolean);
console.log(truthyValues); // Output: ["hello", 42, "world"]

let words = ["apple", "banana", "grape", "apricot"];
let wordsWithAp = words.filter((word) => word.includes("ap")); // includes return true/false
console.log(wordsWithAp); // Output: ["apple", "grape", "apricot"]

let numbers4 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = numbers4.filter(
  (num, index, arr) => arr.indexOf(num) === index
);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

let people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 25, city: "New York" },
  { name: "David", age: 30, city: "Chicago" },
];
let result = people.filter(
  (person) => person.age === 25 && person.city === "New York"
);
console.log(result); // Output: [{ name: "Alice", age: 25, city: "New York" }, { name: "Charlie", age: 25, city: "New York" }]



function arrayIntersection(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el));
  }
  
  console.log(arrayIntersection([1,2,0,3,4,5,6],[6,5,4,7,8,9]));