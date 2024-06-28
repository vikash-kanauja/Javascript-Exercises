const countVowel = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let count = 0;
  for (let char of arr) {
    if (vowel.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};


// function countVowels(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }


// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) !== -1) {
//       count++;
//     }
//   }

//   return count;
// }

console.log(countVowel("Helloo world"));
console.log(countVowel("The quIck brOwn Fox"));
console.log(countVowel("Brrrp"));
