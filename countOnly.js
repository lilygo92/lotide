const countOnly = function(allItems, ItemsToCount){
  const results = {};

  for (const item of allItems){
    console.log(item);
    if (ItemsToCount[item]){
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`🌺Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`💀Assertion Failed: ${actual} !== ${expected}`);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);