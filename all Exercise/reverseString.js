const reverse = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length / 2; i++) {
    let temp = str[i];
    str[i] = str[str.length - i - 1];
    str[str.length - i - 1] = temp;
  }
  return str.join("");
};


// Method 2

// const reverse = (str) => {
//   return str.split('').reverse().join('')
// };


// Method 3 

// function reverse(str) {
//   // Initialize an empty string to hold the reversed string
//   let reversed = '';
//   // Iterate over the string backwards
//   for (let i = str.length - 1; i >= 0; i--) {
//     // Append each character to the reversed string
//     reversed += str[i];
//   }
//   // Return the reversed string
//   return reversed;
// }




console.log(reverse("Sonam"));
console.log(reverse("Sohan"));
console.log(reverse("Mohan"));


