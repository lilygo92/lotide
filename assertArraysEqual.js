const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  let isEqual = eqArrays(actual, expected);
  
  return console.log(isEqual ? `🌺Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;