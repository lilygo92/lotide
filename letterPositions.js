const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // loop through sentence
  // create empty arrays as keys for letters inside results, skipping spaces
  // if sentence[i] has an equivalent key inside results, push i to appropriate array inside results
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]] = [];
    }
    if (sentence[i] !== " ") {
      results[sentence[i]].push(i);
    }
  }
  return results;
};


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

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));