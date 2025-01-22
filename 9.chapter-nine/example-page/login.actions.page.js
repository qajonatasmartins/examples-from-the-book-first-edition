import LoginInteractionsPage from "./login.interactions.page";

export default class LoginActionsPage extends LoginInteractionsPage {
  /**
   * Método para realizar o cadastro de colaborador
   * @param {*} nome - Nome do colaborador
   */
  async cadastrarColaborador(nome) {
    await super.setNomeDoColaborador(nome);
    await super.clickBtnCadastrar();
  }
}
