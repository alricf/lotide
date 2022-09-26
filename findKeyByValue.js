// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, movie) {
  let allKeys = Object.keys(obj);
  for (let key of allKeys) {
    if (movie === obj[key]) {
      return key;
    }
  }
};

//TEST CASES
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "Bad Boys"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Bad Boys"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);