const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    if (object1[key] !== object2[key] && !Array.isArray(object1[key])) {
      return false;
    }
    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected);

  return console.log(isEqual ? `🌺Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `💀Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium" });
