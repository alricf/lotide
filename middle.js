const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    let emptyArray = [];
    return emptyArray;
  } else if (array.length % 2 === 0) {
    let half1 = Math.floor(((array.length - 1) / 2));
    let half2 = Math.floor(((array.length - 1) / 2) + 1);
    let half1Arr = [];
    half1Arr.push(array[half1]);
    let half2Arr = [];
    half2Arr.push(array[half2]);
    let evenArr = [];
    evenArr = half1Arr.concat(half2Arr);
    return evenArr;
  } else if (array.length % 2 !== 0) {
    let half = Math.floor((array.length - 1) / 2);
    let resultArr = [];
    resultArr.push(array[half]);
    return resultArr;
  }
};

module.exports = middle;