
// array.splice(start, deleteCount, item1, item2, ...);

// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove.
// item1, item2, ...: The elements to add to the array, starting at the start index. If no elements are specified, splice will only remove elements.


// Example 1

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// Remove 2 elements starting from index 1
let removedFruits = fruits.splice(1, 2);
console.log(removedFruits); // ["Banana", "Cherry"]
console.log(fruits);        // ["Apple", "Date", "Elderberry"]

// Example 2

let vegetables = ["Carrot", "Potato", "Tomato"];
// Add "Cucumber" and "Pepper" starting from index 1
vegetables.splice(1, 0, "Cucumber", "Pepper");
console.log(vegetables); // ["Carrot", "Cucumber", "Pepper", "Potato", "Tomato"]

//Example 3

let animals = ["Dog", "Cat", "Rabbit", "Horse"];
// Replace 2 elements starting from index 1 with "Tiger" and "Elephant"
animals.splice(1, 2, "Tiger", "Elephant");
console.log(animals); // ["Dog", "Tiger", "Elephant", "Horse"]


//Example 4

let numbers = [1, 2, 3, 4, 5];
// Remove all elements starting from index 2
numbers.splice(2);
console.log(numbers); // [1, 2]



// The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.