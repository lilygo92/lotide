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