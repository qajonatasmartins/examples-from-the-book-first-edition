import { LoginElementsPage } from "./login.elements.page";

const loginElements = LoginElementsPage;

export default class LoginInteractionsPage {
  /**
   * Método para clicar no botão de [Cadastrar]
   */
  async clickBtnCadastrar() {
    await loginElements.btnCadastro.click();
  }

  /**
   * Método para informar o nome do colaborador
   */
  async setNomeDoColaborador(nome) {
    await loginElements.inpNomeDoColaborador.setValue(nome);
  }

  /**
   * Método para obter a mensagem de sucesso do cadastro
   */
  async getTextMsgSucesso() {
    return await loginElements.msgSucesso.getText();
  }
}
