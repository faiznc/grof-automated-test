import { Builder, WebDriver } from "selenium-webdriver";

export class DriverFactory {
  private static driver: WebDriver;

  public static getDriver(): WebDriver {
    if (!DriverFactory.driver) {
      DriverFactory.driver = new Builder().forBrowser("chrome").build();
    }
    // Set implicit waits
    this.driver.manage().setTimeouts({ implicit: 5000 });

    return DriverFactory.driver;
  }

  public static quitDriver(): void {
    new Promise((f) => setTimeout(f, 3000));
    if (DriverFactory.driver) {
      DriverFactory.driver.quit();
    }
  }

  public static async sleepDriver(durationMs: number): Promise<void> {
    return new Promise((f) => setTimeout(f, durationMs));
  }
}
