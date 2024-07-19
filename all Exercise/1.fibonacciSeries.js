const fibonacciSeries = (num) => {
  if (num <= 0) return [];
  else if (num === 1) return [0];
  const fibSeries = [0, 1];
  for (let i = 2; i < num; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries;
};
console.log(fibonacciSeries(2));

//Need to learn again recursion version of fibonacciSeries

// function fibonacciRecursive(n) {
//     if (n <= 0) {
//         return [];
//     } else if (n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return [0, 1];
//     }

//     const fib = fibonacciRecursive(n - 1);
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fib;
// }

// console.log(fibonacciRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
