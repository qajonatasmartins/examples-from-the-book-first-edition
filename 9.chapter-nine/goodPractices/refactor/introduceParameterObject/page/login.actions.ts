import { Page } from "@playwright/test";
import { LoginInteractions } from "./login.interactions";
import { IUser } from "../interface/login/IUser.interface";

export class LoginActions {
  private interactions: LoginInteractions;

  constructor(private page: Page) {
    this.interactions = new LoginInteractions(this.page);
  }

  /**
   * Método para realizar o login no site 'the-internet'
   * @param email
   * @param password
   */
  async toLogIn(user: IUser) {
    await this.interactions.openBrowser();
    await this.interactions.fillEmail(user.email);
    await this.interactions.fillPassword(user.password);
    await this.interactions.clickLogin();
  }
}
