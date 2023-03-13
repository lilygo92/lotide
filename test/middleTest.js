const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require("../middle");

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
  });

  it("returns [] for [1, 2]", () => {
    assert.isTrue(eqArrays(middle([1, 2]), []));
  });
})