const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🌺Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Blahaj", "Blahaj");
assertEqual(1, 1);
assertEqual(1, 2);
