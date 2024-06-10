const removeDuplicateEle = (arr) => {
  let newArray = [...new Set(arr)];
  console.log(newArray);
};
console.log(removeDuplicateEle([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicateEle([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicateEle([1, 2, 3, 4]));
console.log(removeDuplicateEle([]));
// a Set is a built-in object that allows you to store unique values of any type,
// set is a collection of unique values
