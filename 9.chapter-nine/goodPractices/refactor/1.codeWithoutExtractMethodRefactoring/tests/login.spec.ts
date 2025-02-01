import { test } from "@playwright/test";
import { ct0001, ct0002 } from "../data/login/login.data";
import { LoginInteractions } from "../page/login.page";

test.describe("The Internet - Example", () => {
  test("[CT-0001] - Must validate the invalid login on the website", async ({ page }) => {
    const login = new LoginInteractions(page);

    await login.toLogIn(ct0001.email, ct0001.password);
    await login.isTheReturnMessageTheSame(ct0001.message);
  });

  test("[CT-0002] - Must log in to the website", async ({ page }) => {
    const login = new LoginInteractions(page);

    await login.toLogIn(ct0002.email, ct0002.password);
    await login.isTheReturnMessageTheSame(ct0002.message);
  });
});
