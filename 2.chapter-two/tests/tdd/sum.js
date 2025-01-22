const { sum } = require("../../src/sum");
const { describe, it } = require("mocha");
const { assert } = require("chai");

/**
 * O teste realiza a soma de 2 + 3 e espera que o resultado seja 5.
 * Se o resultado for diferente, a mensagem
 * "The result of the sum is divergent from the expected"
 * será exibida no terminal.
 */
describe("[Unit] sum.js", () => {
  it("[CT-Unit-0001] - Should validate the sum of 2 + 3", () => {
    const result = sum(2, 3);
    assert.equal(
      result,
      5,
      "The result of the sum is divergent from the expected"
    );
  });
});

