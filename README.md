This is a simple Automated Test project as a technical test for GROF app using Typescript [Typescript](https://www.typescriptlang.org/), [Cucumber](https://cucumber.io), and [Selenium](https://www.selenium.dev/).

## Getting Started

1. First, run the [GROF testing app](https://github.com/bramsproutasia/grof-automation-testing) by following the steps on that repository.
2. Make sure the GROF app is running by accessing [http://localhost:3000](http://localhost:3000/)
3. Install all required packages using
```bash
npm install
```
4. Run the test using

```bash
npm test
```

  This will run example test cases GROF-1 : Successful login with valid credentials
  
5. You can also specify which test manually by this custom command
```bash
## npx cucumber-js src/features/ -r src/step-definitions/ -r src/utils/ --tags "{Custom Test Case ID}"
npx cucumber-js src/features/ -r src/step-definitions/ -r src/utils/ --tags "@GROF-2"
```

6. It will then open up a New Chrome Browser and run the specified test case.
