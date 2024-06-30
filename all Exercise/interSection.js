function arrayIntersection(arr1, arr2) {
    let elementCounts = {};
    let intersection = [];
  
    // Count occurrences of each element in arr1
    for (let element of arr1) {
      if (elementCounts[element]) {
        elementCounts[element]++;
      } else {
        elementCounts[element] = 1;
      }
    }
  
    // Find common elements in arr2
    for (let element of arr2) {
      if (elementCounts[element] && elementCounts[element] > 0) {
        intersection.push(element);
        elementCounts[element]--;
      }
    }
  
    return intersection;
  }
  
  // Test the function
  let array1 = [1, 2, 3, 4, 4, 5];
  let array2 = [4, 5, 6, 7, 8, 4];
  let intersection = arrayIntersection(array1, array2);
  console.log(intersection); // Output: [4, 4, 5]
  