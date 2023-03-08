const assertArraysEqual = (actual, expected) => {
  let bool = eqArrays(actual, expected);
  
  return console.log(bool ? `🌺Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`);
};

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
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);