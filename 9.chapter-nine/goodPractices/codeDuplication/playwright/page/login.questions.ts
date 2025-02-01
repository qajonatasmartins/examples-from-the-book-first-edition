import { Page, expect } from "@playwright/test";
import { elements } from "./login.elements";

export class LoginQuestions {
  constructor(private page: Page) {}

  /**
   * Método para validar a mensagem de retorno do login no site 'the-internet'
   * @param expectedMessage
   */
  async isTheReturnMessageTheSame(expectedMessage: string) {
    await expect(this.page.locator(elements.lblMenssage)).toHaveText(
      expectedMessage
    );
  }
}
