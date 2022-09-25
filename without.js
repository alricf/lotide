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
    console.log("✅ The two arrays are equal.");
  } else {
    console.log("❌ The two arrays are not equal.");
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let a of source) {
    result.push(a);
  }
  for (let i = 0; i < itemsToRemove.length; i++)
    for (let j = 0; j < result.length; j++) {
      if (result[j] === itemsToRemove[i]) {
        result.splice(j, 1);
      }
    }
  return result;
};

console.log(without([1, 2, 3], [1]));
assertArraysEqual([1, 2, 3], [1, 2, 3]);

console.log(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);