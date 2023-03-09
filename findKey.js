const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🌺Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
};

const twoStar = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(twoStar, "noma");