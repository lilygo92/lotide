const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected);

  return console.log(isEqual ? `🌺Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `💀Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;