import { Given, When, Then } from "cucumber";
import { LoginPage } from "../page-objects/loginPage";

const loginPage = new LoginPage();

Given("I am on the login page", async function () {
  await loginPage.navigateToLoginPage();
});

When(
  "I insert {string} as the email on the login page",
  async (email: string) => {
    await loginPage.enterEmail(email);
  }
);

When("I click the Continue bytton on the login page", async () => {
  await loginPage.clickContinueBtn();
});

When(
  "I insert {string} as the {string} on the login page",
  async (text: string, textBox: string) => {
    await loginPage.insertTextToTextbox(text, textBox);
  }
);

Then("I should be navigated to {string} page", (pageTitle: string) => {
  loginPage.navigatedToCustomPage(pageTitle);
});

// Then("I should be redirected to the dashboard", async function() {
//   const driver = await loginPage["driver"];
//   const currentUrl = await driver.getCurrentUrl();
//   expect(currentUrl).to.equal("http://example.com/dashboard");
// });
