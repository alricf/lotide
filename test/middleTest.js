const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CASES
//EVEN TEST
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//ODD TEST
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
//2 VALUE ARRAY TEST
console.log(middle([1, 2]));
assertArraysEqual(middle([1,2]), []);
//1 VALUE ARRAY TEST
console.log(middle([1]));
assertArraysEqual(middle([1]), []);