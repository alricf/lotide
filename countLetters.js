// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputStr) {
  let results = {};
  for (let letter of inputStr) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

//TEST CODE
//TEST IF COUNTLETTERS FUNCTION WORKS
const test = countLetters("LHL labsss");
console.log(test);
//TEST IF ASSERTEQUALS WORKS BASED ON 1 LETTER BEING COUNTED AND ASSERTED.
assertEqual(test["L"], 2);
assertEqual(test["H"], 1);
assertEqual(test["l"], 1);
assertEqual(test["a"], 1);
assertEqual(test["b"], 1);
assertEqual(test["s"], 3);