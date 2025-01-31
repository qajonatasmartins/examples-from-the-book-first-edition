const { calculateDivision } = require("../src/mathematicalFormulas");
const { describe, it } = require("mocha");
const { assert } = require("chai");

describe("[Unit] mathematicalFormulas.js", () => {
  it("[CT-Unit-0001] - Must validate the division of 10 / 2", () => {
    const result = calculateDivision(10, 2);
    assert.equal(
      result,
      5,
      "The result of the division is different from what was expected"
    );
  });

  it("[CT-Unit-0002] - Must validate the division of 10 / 0", () => {
    const result = calculateDivision(10, 0);
    assert.equal(
      result,
      "Erro: Divisão por zero",
      "The result of the division is different from what was expected"
    );
  });
});
