import { After, Before } from "cucumber";
import { DriverFactory } from "../utils/DriverFactory";

Before(async function () {
  await DriverFactory.getDriver();
});

After(async function () {
  // General Waits - For debugging
  await new Promise((f) => setTimeout(f, 3000));
  await DriverFactory.quitDriver();
});
