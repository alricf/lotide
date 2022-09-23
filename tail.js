const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arg) {
  return arg.slice(1);
};

// Test Case 1: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 2: Check the original array
const words2 = ["Labs"];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 1); // original array should still have 3 elements!

// Test Case 3: Check the original array
const words3 = [];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 0); // original array should still have 3 elements!