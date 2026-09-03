const assert = require("node:assert/strict");
const { test } = require("node:test");
const { sum } = require("../src/sum");

test("adds two numbers", () => {
  assert.equal(sum(1, 2), 3);
});

test("is not string concatenation", () => {
  assert.equal(sum(0.1, 0.2).toFixed(1), "0.3");
});
