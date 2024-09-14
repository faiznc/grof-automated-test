import { Given, When, Then } from "cucumber";
import { BillPage } from "../page-objects/billPage";
import assert from "assert";
import { DriverFactory } from "../utils/DriverFactory";

const billPage = new BillPage();

Given("I am on the bills page", async function () {
  await billPage.init();
  await billPage.navigateToBillsPage();
});

Given('I select Bill on index {string}', async (index: string) => {
  await billPage.init()  
  await billPage.clickOnRow(index)
})

Then('I enter the {string} as {string}', async (textBox: string, data: string) => {
  await billPage.enterData(data, textBox);
})

Then('the {string} field should be filled with {string}', async (textBox: string, expectedData: string) => {
    let actual:string = await billPage.getData(textBox);
    assert.equal(actual, expectedData)
  })
  
  Then('I choose the Currency of {string} on Details Bills', async (currency: string) => {
    await billPage.chooseCurrency(currency);
  })
  
  Then('the Approve button should be {string}', async (buttonState: string) => {
    var actual: boolean = await billPage.isApproveBtnEnabled();
    var expectedState = (buttonState=="enabled") ? (true) : false;
    assert.equal(actual, expectedState)
})

Then('I click the Approve button on Details Bills', async () => {
  await billPage.clickApproveBtn();
})

Then('I click the back button', async() => {
  await billPage.clickBackBtn();
  await DriverFactory.sleepDriver(500) // Animation Delay
})
