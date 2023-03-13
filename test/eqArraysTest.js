const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should be true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  })

  it("should be false for [3, 2, 1], [1, 2, 3]", () => {
    assert.isFalse(eqArrays([3, 2, 1], [1, 2, 3]));
  })

  it("should be false for [\"1\", \"2\", \"3\"], [\"1\", \"2\", 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  })
})