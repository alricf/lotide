const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, "abcd"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4 ,5, 6]);