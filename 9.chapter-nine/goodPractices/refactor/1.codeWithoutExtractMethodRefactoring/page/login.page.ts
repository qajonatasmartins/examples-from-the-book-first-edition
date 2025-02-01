import { Page, expect, Locator } from "@playwright/test";

export class LoginInteractions {

  readonly page: Page
  readonly inpEmail: Locator
  readonly inpPassword: Locator
  readonly btnEnter: Locator
  readonly lblMenssage: Locator

  constructor(page: Page) {
    this.page = page
    this.inpEmail = page.locator('input[name="username"]')
    this.inpPassword = page.locator('input[name="password"]')
    this.btnEnter = page.locator("button[type='submit']")
    this.lblMenssage = page.locator("#flash")
  }

  /**
   * Método para realizar o login no site 'the-internet'
   * @param email
   * @param password
   */
  async toLogIn(email: string, password: string) {
    await this.openBrowser();
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  /**
   * Método para validar a mensagem de retorno do login no site 'the-internet'
   * @param expectedMessage
   */
  async isTheReturnMessageTheSame(expectedMessage: string) {
    await expect(this.lblMenssage).toHaveText(expectedMessage);
  }

  /**
   * Método para abrir a tela de login
   */
  async openBrowser() {
    await this.page.goto("/login");
  }

  /**
   * Método para preencher o campo 'E-mail'
   * @param email
   */
  async fillEmail(email: string) {
    await this.inpEmail.fill(email);
  }

  /**
   * Método para preencher o campo 'Senha'
   * @param password
   */
  async fillPassword(password: string) {
    await this.inpPassword.fill(password);
  }

  /**
   * Método para clicar no botão [Login]
   */
  async clickLogin() {
    await this.btnEnter.click();
  }
}
