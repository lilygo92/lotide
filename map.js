const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};

const result1 = map(words, word => word[0]);
console.log(result1);

const assertArraysEqual = (actual, expected) => {
  let isEqual = eqArrays(actual, expected);
  
  return console.log(isEqual ? `🌺Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`);
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


assertArraysEqual(map(words, word => word[0]) , ["g","c", "t", "m", "t"]);