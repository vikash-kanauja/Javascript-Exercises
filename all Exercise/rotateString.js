function rotateString(str, n) {
    n = n % str.length;
    return str.slice(n) + str.slice(0,n);
  }
console.log(rotateString("vikashkanaujia",16));
