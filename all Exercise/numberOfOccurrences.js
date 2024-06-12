const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const counts = {};

array.forEach(element => {
  counts[element] = (counts[element] || 0) + 1;
});

console.log(counts);
