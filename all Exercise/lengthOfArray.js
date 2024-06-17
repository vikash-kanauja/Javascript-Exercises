const array = [1, 2, 3];

console.log(array.length);
array[50] = 50;
console.log(array.length);    //51
console.log(array);           // [ 1, 2, 3, <47 empty items>, 50 ]
console.log(array[7]);        // undefined
