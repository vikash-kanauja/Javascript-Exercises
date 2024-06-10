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
console.log(countVowel("Helloo world"));
console.log(countVowel("The quIck brOwn Fox"));
console.log(countVowel("Brrrp"));
