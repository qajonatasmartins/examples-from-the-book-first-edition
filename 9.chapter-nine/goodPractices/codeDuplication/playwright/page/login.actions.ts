import { Page } from "@playwright/test";
import { LoginInteractions } from "./login.interactions";

export class LoginActions {
  private interactions: LoginInteractions;

  constructor(private page: Page) {
    this.interactions = new LoginInteractions(page);
  }

  /**
   * Método para realizar o login no site 'the-internet'
   * @param email
   * @param password
   */
  async toLogIn(email: string, password: string) {
    await this.interactions.openBrowser();
    await this.interactions.fillEmail(email);
    await this.interactions.fillPassword(password);
    await this.interactions.clickLogin();
  }
}
