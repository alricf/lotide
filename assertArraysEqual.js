const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log("✅ The two arrays are equal.");
  } else {
    console.log("❌ The two arrays are not equal.");
  }
};

module.exports = assertArraysEqual;