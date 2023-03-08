const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🌺Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"));