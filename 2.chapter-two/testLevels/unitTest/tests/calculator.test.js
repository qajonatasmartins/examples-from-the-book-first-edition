const Calculator = require("../src/calculator");
const { describe, it } = require("mocha");
const { assert } = require("chai");

describe("[Unit] Calculator.js", () => {
  it("[CT-Unit-0001] - Should validate the add of 3 + 5", () => {
    const calculator = new Calculator();
    const result = calculator.add(3, 5);
    assert.equal(result, 8, "the result is different from what was expected");
  });
});
