import { Page } from "@playwright/test";
import { elements } from "./login.elements";

export class LoginInteractions {
  constructor(private page: Page) {}

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
    await this.page.fill(elements.inpEmail, email);
  }

  /**
   * Método para preencher o campo 'Senha'
   * @param password
   */
  async fillPassword(password: string) {
    await this.page.fill(elements.inpPassword, password);
  }

  /**
   * Método para clicar no botão [Login]
   */
  async clickLogin() {
    await this.page.click(elements.btnEnter);
  }
}
