function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
    }
  
    // Fill the rest of the array with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
  // Test the function
  let array = [0, 1, 0, 3, 12, 0, 5];
  let result = moveZerosToEnd(array);
  console.log(result); // Output: [1, 3, 12, 5, 0, 0, 0]
  