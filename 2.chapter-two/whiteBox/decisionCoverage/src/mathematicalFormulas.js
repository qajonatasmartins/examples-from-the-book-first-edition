function calculateDivision(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero";
  } else {
    return a / b;
  }
}

module.exports = {
  calculateDivision,
};
