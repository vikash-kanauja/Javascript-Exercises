const findMode = (arr) => {
  const counts = {};
  let maxi = 0;
  let mode;
  arr.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxi) {
      maxi = counts[element];
      mode = element;
    }
  });
  return mode;
};
console.log(findMode([1, 2, 2, 3, 1, 4, 2]));
