
function countConsonants(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (
        char.toLowerCase() !== char.toUpperCase() && // Check if char is a letter
        vowels.indexOf(char) === -1 // Check if char is not a vowel
      ) {
        count++;
      }
    }
  
    return count;
  }
  
  //Method 2

function countConsonants(str) {
    return (str.match(/[^aeiou\s\d\W_]/gi) || []).length;
  }

  console.log(countVowel("Helloo world"));
console.log(countVowel("The quIck brOwn Fox"));
console.log(countVowel("Brrrp"));
