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

const without = (arr, remove) => {
  // create an clone of arr to store the final value
  let removed = arr.slice();

  // loop through removed while checking if arr[i] is also in remove
  for (let i = 0; i < removed.length; i++) {
    // loop through remove to check if arr[i] equals remove[j]
    // if arr[i] !== remove[j],
    for (let j = 0; j < remove.length; j++) {
      if (removed[i] === remove[j]) {
        removed.splice(i, 1);
      }
    }
  }
  return removed;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1, 2, 3]));
console.log(without(["Alice", "Lily", "Kittens"], ["Kittens "]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);