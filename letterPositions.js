const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log("✅ The two arrays are equal.");
  } else {
    console.log("❌ The two arrays are not equal.");
  }
};

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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//TEST CASES
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);