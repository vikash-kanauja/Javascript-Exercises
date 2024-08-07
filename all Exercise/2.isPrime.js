// A number is prime if it is greater than 1 and has no positive divisors other than 1 and itself.
const array = [4, 5, 7, 8, 9, 11, 17, 97, 47, 12, 0, 1];

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {   // to improve efficiency
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  console.log(isPrime(array[i]));
}
