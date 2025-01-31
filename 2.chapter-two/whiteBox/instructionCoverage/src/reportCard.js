function calculateTheAverageGrade(result) {
  if (result >= 60) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}

module.exports = {
  calculateTheAverageGrade,
};
