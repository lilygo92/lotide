const tail = (arr) => {
  let result = arr.slice(1);
  return (result);
};


const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🌺Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(result.toString() , ["Lighthouse", "Labs"].toString());

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!