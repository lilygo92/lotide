const assertArraysEqual = (actual, expected) => {
  if (actual.length === expected.length) {
    // loop through both arrays at the same time, checking each value
    for (let i = 0; i < actual.length; i++) {
      // break the loop and fail assertion if there are any inequalities
      if (actual[i] !== expected[i]) {
        return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
      }
    }
    // pass assertion if everything is equal
    return console.log(`🌺Assertion Passed: ${actual} === ${expected}`);
  }
  
  // fail assertion if there are any inequalities
  return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);