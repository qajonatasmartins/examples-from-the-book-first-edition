const { calculateTheAverageGrade } = require("../src/reportCard");
const { describe, it } = require("mocha");
const { assert } = require("chai");

describe("[Unit] reportCard.js", () => {
  it("[CT-Unit-0001] - Validate the calculation of a score of 75", () => {
    const result = calculateTheAverageGrade(75);
    assert.equal(result, "APROVADO", "Result is different from expected");
  });

  it("[CT-Unit-0002] - Validate the calculation of a score of 45", () => {
    const result = calculateTheAverageGrade(45);
    assert.equal(result, "REPROVADO", "Result is different from expected");
  });
});
