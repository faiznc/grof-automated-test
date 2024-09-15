import { By, until, WebDriver } from "selenium-webdriver";
import { DriverFactory } from "../utils/DriverFactory";
import { config } from "../utils/config";
import assert from "assert";

export class LoginPage {
  private driver!: WebDriver;

  EMAIL_INPUT: By = By.xpath("//input[@name='emailAddress']");
  CONTINUE_BTN: By = By.xpath("//button[normalize-space()='Continue']");

  async init() {
    this.driver = await DriverFactory.getDriver();
  }  

  async navigateToLoginPage() {
    await this.init();
    await this.driver.get(config.baseUrl);
    assert.strictEqual(await this.driver.getTitle(), "Grof Co");
  }

  async navigatedToCustomPage(pageTitle: string) {
    // Expected to stale.
    await this.driver.wait(until.stalenessOf(await this.driver.findElement(By.xpath("//h1"))));

    // Try to fetch the Page title
    try{
      await this.driver.wait(until.elementTextIs(this.driver.findElement(By.xpath("//h1")), pageTitle), 3000);
    }

    // Handle if page title isn't changed yet
    catch{
      await DriverFactory.sleepDriver(500); // Wait for UI Animation
      await this.driver.wait(until.elementTextIs(this.driver.findElement(By.xpath("//h1")), pageTitle));
    }

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

  async getAnyNotification(): Promise<string> {
    return this.driver.findElement(By.xpath("//div[contains(@class,'bg')]/span")).getText()
  }
}
