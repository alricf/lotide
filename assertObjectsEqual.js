// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  // Implement me!
  const inspect = require('util').inspect;
  let result = eqObjects(obj1, obj2);
  if (result === true) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

//TEST CODE
const a = {
  a: '1',
  b: 2
};

const b = {
  b: 2,
  a: '1'
};

const c = {
  a: '1',
  c: '2'
};

const d = {
  a: '1',
  z: 2
};

const e = {
  a: '1',
  c: [1, 2, 3]
};

const f = {
  c: [1, 2, 3],
  a: '1',
};

assertObjectsEqual(a, b);
assertObjectsEqual(a, c);
assertObjectsEqual(b, d);
assertObjectsEqual(c, e);
assertObjectsEqual(f, e);