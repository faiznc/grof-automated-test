import { After, Before } from "cucumber";
import { DriverFactory } from "../utils/DriverFactory";

Before(async function () {
  await DriverFactory.getDriver();
});

After(async function () {
  await DriverFactory.quitDriver();
});
