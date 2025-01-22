/** ==========================================================================================
 * Para métodos de interação com um um único componente da tela.
 * Padrão: [ação] + [nome do mapeamento de elemento]
 * Aqui a únida responsabilidade dos métodos é realizar a interação com o componente de forma individual.
 */

/**
 * Método para realizar click no elemento do botão de [Cadastrar]
 */
async function clickBtnCadastro() {
  /** aqui colocar apenas a interação com o componente do botão [Cadastrar]
   * Exemplo: await super.btnCadastro.click()
   */
}

/**
 * Método para obter o texto com campo nome do colaborador
 */
async function getTextLblNomeColaborador() {
  /** aqui colocar apenas a interação com o componente do label com nome do colaborador
   * Exemplo: return await super.lblNomeColaborador.getText()
   */
}

/**
 * Método para informar no campo 'Nome do colaborador' o valor desejado
 */
async function setInpNomeDoColaborador(nomeColaborador) {
  /** aqui colocar apenas a interação com o componente do label com nome do colaborador
   * Exemplo:await super.inpNomeDoColaborador.setValue(nomeColaborador)
   */
}

/** ==========================================================================================
 * Para métodos que realizam ações, o nome do método precisa ser genérico e que informe a
 * ação realizada.
 * Aqui as ações podem chamar as interações criadas anteriormente.
 */

async function cadastrarColaborador(nomeColaborador) {
  /**
   * Exemplo
   * await super.setInpNomeDoColaborador(nomeColaborador)
   * await super.clickBtnCadastro()
   */
}
