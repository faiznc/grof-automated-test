import { By, until, WebDriver } from "selenium-webdriver";
import { DriverFactory } from "../utils/DriverFactory";
import { config } from "../utils/config";
import assert from "assert";

export class LoginPage {
  private driver: WebDriver;

  LOGIN_TITLE: string = "Grof Co";
  EMAIL_INPUT: By = By.xpath("//input[@name='emailAddress']");
  CONTINUE_BTN: By = By.xpath("//button[normalize-space()='Continue']");

  constructor() {
    this.driver = DriverFactory.getDriver();
    console.log("STARTED!");
  }

  async navigateToLoginPage() {
    await this.driver.get(config.baseUrl);
    assert.strictEqual(await this.driver.getTitle(), "Grof Co");
  }

  async navigatedToCustomPage(pageTitle: string) {
    // await DriverFactory.sleepDriver(2000);
    // Expected to stale.
    await this.driver.wait(until.stalenessOf(await this.driver.findElement(By.xpath("//h1"))));
    await this.driver.wait(until.elementTextIs(this.driver.findElement(By.xpath("//h1")), pageTitle),5000);
    assert.strictEqual(await this.driver.findElement(By.xpath("//h1")).getText(), pageTitle);
  }

  async enterEmail(email: string) {
    await this.driver.findElement(this.EMAIL_INPUT).sendKeys(email);
  }
  
  async clickContinueBtn() {
    await this.driver.findElement(this.CONTINUE_BTN).click();
  }

  async insertTextToTextbox(text: string, type: string) {
    const locator = By.xpath("//input[@name='" + type + "']");
    await this.driver.findElement(locator).sendKeys(text);
  }
}
