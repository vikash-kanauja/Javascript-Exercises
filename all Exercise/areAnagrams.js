// function areAnagrams(str1, str2) {
//   const sortStr = (str) => str.replaceAll(" ", "").toLowerCase().split("").sort().join("");
//   return sortStr(str1) === sortStr(str2);
// }

//Method 2

function areAnagrams(str1, str2) {
  // Remove non-word characters and convert to lowercase
  // (str) => str.replace(/[^\w]/g, "").toLowerCase();
const cleanStr =(str) =>str.replaceAll(" ", "").toLowerCase().split("").sort().join("");


  // Clean and compare lengths
  const cleanStr1 = cleanStr(str1);
  const cleanStr2 = cleanStr(str2);

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create frequency maps for characters
  const charMap1 = {};
  const charMap2 = {};

  // Populate frequency maps
  for (let char of cleanStr1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  // Compare frequency maps
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("Debit Card", "Bad Credit")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
