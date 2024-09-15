import { Builder, WebDriver } from "selenium-webdriver";

export class DriverFactory {
  private static driver: WebDriver | null;

  public static async getDriver(): Promise<WebDriver> {
    await this.sleepDriver(500); // Wait for initialization

    if (!DriverFactory.driver) {
      DriverFactory.driver = await new Builder().forBrowser("chrome").build();
    }
    // Set implicit waits
    await DriverFactory.driver.manage().setTimeouts({ implicit: 15000 });
    return DriverFactory.driver;
  }

  public static async quitDriver(): Promise<void> {
    if (DriverFactory.driver) {
      await DriverFactory.driver.quit();
      DriverFactory.driver = null;
    }
    await this.sleepDriver(1000); // Wait for driver to truly closed
  }

  public static async sleepDriver(durationMs: number): Promise<void> {
    return new Promise((f) => setTimeout(f, durationMs));
  }
}
