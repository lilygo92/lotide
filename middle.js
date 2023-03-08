const assertArraysEqual = (actual, expected) => {
  let isEqual = eqArrays(actual, expected);
  
  return console.log(isEqual ? `🌺Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`);
}

const eqArrays = (actual, expected) => {
  // make sure both arrays are the same length
  if (actual.length === expected.length) {
    // loop through both arrays at the same time, checking each value
    for (let i = 0; i < actual.length; i++) {
      // break the loop and return false if there are any inequalities
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    // return true if everything is equal
    return true;
  }

  // return false if there are any inequalities
  return false;
}

const middle = arr => {
  let midElements = [];
  if (arr.length <= 2){
    return midElements;
  }

  if (arr.length % 2 === 0){
    midElements.push(arr[(arr.length/2 - 1)] , arr[arr.length/2]);
    return midElements;
  }

  midElements.push(arr[Math.floor(arr.length/2)])
  return midElements;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6])); // => [6, 1]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]) , [6, 1]);
console.log("a");
middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);