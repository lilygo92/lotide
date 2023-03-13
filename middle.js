const assertArraysEqual = require("./assertArraysEqual");

const eqArrays = require("./eqArrays");

const middle = arr => {
  let midElements = [];
  if (arr.length <= 2) {
    return midElements;
  }

  if (arr.length % 2 === 0) {
    midElements.push(arr[(arr.length / 2 - 1)] , arr[arr.length / 2]);
    return midElements;
  }

  midElements.push(arr[Math.floor(arr.length / 2)]);
  return midElements;
};

module.exports = middle;