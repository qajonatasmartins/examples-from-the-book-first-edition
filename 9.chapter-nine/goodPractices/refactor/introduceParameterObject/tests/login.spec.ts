import { test } from "@playwright/test";
import { LoginActions } from "../page/login.actions";
import { LoginQuestions } from "../page/login.questions";
import { ct0001, ct0002 } from "../data/login/login.data";

test.describe("The Internet - Example", () => {
  test("[CT-0001] - Must validate the invalid login on the website", async ({ page }) => {
    const login = new LoginActions(page);
    const assertions = new LoginQuestions(page);

    await login.toLogIn(ct0001);
    await assertions.isTheReturnMessageTheSame(ct0001.message);
  });

  test("[CT-0002] - Must log in to the website", async ({ page }) => {
    const login = new LoginActions(page);
    const assertions = new LoginQuestions(page);

    await login.toLogIn(ct0002);
    await assertions.isTheReturnMessageTheSame(ct0002.message);
  });
});
