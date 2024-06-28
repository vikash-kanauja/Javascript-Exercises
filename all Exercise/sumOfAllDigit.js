const sumOfDigit = (num) => {
  // let arr = Array.from(String(num),Number);
  let arr = [...String(num)]
  return arr.reduce((accum, currEle) => ( accum + parseInt(currEle)), 0);

  // let sum = 0;
  // while (num > 0) {
  //     sum += num % 10;  // Add the last digit to sum
  //     num = Math.floor(num / 10);  // Remove the last digit
  // }
  // return sum;
};
console.log(sumOfDigit(234567));
console.log(sumOfDigit(98765));
console.log(sumOfDigit(987755));
console.log(sumOfDigit(12345));
