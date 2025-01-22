import LoginInteractionsPage from "./login.interactions.page";
import { assert } from "chai";

export default class LoginQuestionsPage extends LoginInteractionsPage {
  /**
   * Método para realizar o cadastro de colaborador
   * @param {*} nome - Nome do colaborador
   */
  async aMensagemRetornadaEIgualA(mensagemEsperada) {
    assert.equal(
      await super.getTextMsgSucesso(),
      mensagemEsperada,
      "A mensagem de sucesso é diferente do esperado."
    );
  }
}
