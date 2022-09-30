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

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};



const data1 = [ 1, 2, 5, 7, 2, -1, 2, 4, 5 ];
const results1 = takeUntil(data1, x => x < 0);

const data2 = [ "I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood" ];
const results2 = takeUntil(data2, x => x === ',');

const data3 = [ false, true, 1, 2, "three", '1', '2' ];
const results3 = takeUntil(data3, x => x === '1');
const results4 = takeUntil(data3, x => x === 1);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, [ false, true, 1, 2, "three"]);
assertArraysEqual(results4, [ false, true ]);