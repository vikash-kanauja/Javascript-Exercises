function frequencyOfAChar(str, char) {
  let count = {};
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }
  return count[char];
}

console.log(frequencyOfAChar("aabbbaaccaanaaanaa", "a"));
