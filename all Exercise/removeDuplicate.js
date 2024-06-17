const arr = [2, 3, 5, 3, 6, 8, 9, 2, 11, 5];
const strArray = [
  "vikash",
  "vikash",
  "Mike",
  "John",
  "Nancy",
  "Thomas",
  "Nancy",
  "Peter",
  "Mike",
];

const resultArray = [...new Set(arr)]; // spread operator convert array into an individual element
console.log(resultArray);

const resultString = [...new Set(strArray)];
console.log(resultString);
