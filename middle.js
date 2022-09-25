const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    return "✅ The two arrays are equal.";
  } else {
    return "❌ The two arrays are not equal.";
  }
};

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    let emptyArray = [];
    return emptyArray;
  } else if (array.length % 2 === 0) {
    let half1 = Math.floor(((array.length - 1) / 2));
    let half2 = Math.floor(((array.length - 1) / 2) + 1);
    let half1Arr = [];
    half1Arr.push(array[half1]);
    let half2Arr = [];
    half2Arr.push(array[half2]);
    let evenArr = [];
    evenArr = half1Arr.concat(half2Arr);
    return evenArr;
  } else if (array.length % 2 !== 0) {
    let half = Math.floor((array.length - 1) / 2);
    let resultArr = [];
    resultArr.push(array[half]);
    return resultArr;
  }
};

//TEST CASES
//EVEN TEST
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
//ODD TEST
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
//2 VALUE ARRAY TEST
console.log(middle([1, 2]));
console.log(assertArraysEqual(middle([1,2]), []));
//1 VALUE ARRAY TEST
console.log(middle([1]));
console.log(assertArraysEqual(middle([1]), []));
