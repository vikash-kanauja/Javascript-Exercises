let array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let arr = [1, 2, 3, 4];

const flattendArr = array.reduce((prev, curr) => prev.concat(curr), []);
console.log(flattendArr);
console.log(...array);
console.log(...arr);

// Second method
// let array = [[1, 2], [3, 4], [5, 6]];
// let flattenedArray = array.flat();
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Third Method
// let array = [[1, 2], [3, 4], [5, 6]];
// let flattenedArray = [].concat(...array);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
