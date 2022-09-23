// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arg) {
  if (arg.length === 0) {
    return undefined;
  } else {
    return arg[0];
  }
};

// TEST CODE-PASS
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([7]), 7);
//TEST CODE-FAIL
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "HELLO");
assertEqual(head([2]), undefined);
assertEqual(head([7]), 8);