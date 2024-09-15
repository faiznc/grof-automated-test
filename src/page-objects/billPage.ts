import { By, Key, until, WebDriver } from "selenium-webdriver";
import { DriverFactory } from "../utils/DriverFactory";
import { config } from "../utils/config";
import assert from "assert";

export class BillPage {
  private driver!: WebDriver;

  APPROVE_BTN: By = By.xpath("//button[normalize-space()='APPROVE']");
  BACK_BTN: By = By.xpath("//h1/../div");


  async init() {
    this.driver = await DriverFactory.getDriver();
  }  

  async navigateToBillsPage() {
    this.driver = await DriverFactory.getDriver();
    await this.driver.get(config.baseUrl);
    assert.strictEqual(await this.driver.getTitle(), "Grof Co");
  }

  async clickOnRow(index: string) {
    const locator = By.xpath("//tbody/tr[" + index + "]");
    await this.driver.findElement(locator).click();
  }

  async chooseCurrency(currency: string) {
    await this.driver.findElement(BillPage.getLocator("Currency")).click();
    await this.driver.actions().sendKeys(currency).sendKeys(Key.ENTER).perform();
  }

  async enterData(data: string, textField: string) {
    await this.driver.findElement(BillPage.getLocator(textField)).sendKeys(data);
}

async getData(textField: string) : Promise<string>{
    await DriverFactory.sleepDriver(200)
    return await this.driver.findElement(BillPage.getLocator(textField)).getAttribute("value");
  }

  static getLocator(textField:string): By {
    switch (textField) {
        case "Bill Name":
            return By.xpath("//input[@name='contactName']");
        case "Bill Date":
            return By.xpath("//input[@name='billDate']");
        case "Bill Amount":
            return By.xpath("//input[@name='billAmount']");
        default:
            return By.xpath("//select[@name='billCurrency']");
        
    }
  }

  async isApproveBtnEnabled(): Promise<boolean> {
    await this.driver.wait(until.stalenessOf(await this.driver.findElement(this.APPROVE_BTN)), 1000);
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.APPROVE_BTN)), 1000);
    return await this.driver.findElement(this.APPROVE_BTN).isEnabled();
  }

  async clickApproveBtn(): Promise<void> {
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.APPROVE_BTN)), 1000);
    await this.driver.findElement(this.APPROVE_BTN).click();
  }

  async clickBackBtn(): Promise<void> {
    await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.BACK_BTN)), 1000);
    await this.driver.findElement(this.BACK_BTN).click();
  }

}
