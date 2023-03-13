const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 5 for [1, 3, 5]", () => {
    assert.strictEqual(tail([1, 3 , 5]), 5);
  });

  it("returns labs for [lighthouse, labs]", () => {
    assert.strictEqual(tail(["lighthouse", "labs"]), "labs");
  });
});