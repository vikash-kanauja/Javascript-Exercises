function findDuplicates(arr) {
  const seen = new Set();   // Set(3) { 2, 1, 4 }
  const duplicates = new Set();   //Set(3) { 2, 1, 4 }
  for (let num of arr) {
    if (seen.has(num)) {    // has are use to search an elememnt
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  console.log(duplicates);
  console.log(seen);
  // return Array.from(duplicates);
  return [...duplicates]
}

// Second Method  $$$ = using Object 


// function findDuplicates(arr) {
//   let elementCounts = {};
//   let duplicates = [];

//   for (let element of arr) {             
//     if (elementCounts[element]) {            // elementCounts[element] = (elementCounts[element] || 0 ) + 1
//       elementCounts[element]++;
//     } else {
//       elementCounts[element] = 1;
//     }
//   }

//   for (let element in elementCounts) {
//     if (elementCounts[element] > 1) {
//       duplicates.push(element);
//     }
//   }

//   return duplicates;
// }
// // Test the function
// let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 6];
// let duplicates = findDuplicates(arrayWithDuplicates);
// console.log(duplicates); // Output: ["2", "3", "6"]


console.log(findDuplicates([1,2,3,2,1,4,54,4,6,7,8,9]));