import { test } from "@playwright/test";
import { LoginActions } from "../page/login.actions";
import { LoginQuestions } from "../page/login.questions";

test.describe("The Internet - Example", () => {
  test("[CT-0001] - Must log in to the website", async ({ page }) => {
    const login = new LoginActions(page);
    const assertions = new LoginQuestions(page);

    await login.toLogIn("email@email.com", "1234567");
    await assertions.isTheReturnMessageTheSame("mensagem");
  });
});
