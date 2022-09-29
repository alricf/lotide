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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CASES
const words = ["ground", "control", "to", "major", "tom"];
const nums = [2, 3, 4, 5, 6];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0].toUpperCase());
const results3 = map(words, word => word + 's');
const results4 = map(nums, num => num * 10);
const results5 = map(nums, num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['G', 'C', 'T', 'M', 'T']);
assertArraysEqual(results3, ["grounds", "controls", "tos", "majors", "toms"]);
assertArraysEqual(results4, [20, 30, 40, 50, 60]);
assertArraysEqual(results5, ['even', 'odd', 'even', 'odd', 'even']);
