# Playwright Framework project Demonstration <br>
- In this project at first I developed framework using Javascript Mocha test framework. <br>
- To demonstrate typescript: added one end to end tc using typescript. <br>
- Introduced Cucumber BDD framework and demonstrate few tcs. <br>
- Download the project, open the project using VScode or any convenient editor. <br>
  # Installing packages <br>
  - Install Node.js <br>
  - Playwright Test for VSCode from VSCode extensions <br>
  - Cucumber (Gherkin) Full Support from VSCode extensions <br>
  # For detailed Playwright installation follow the below official links to install packages <br>
  - https://playwright.dev/docs/intro <br>
  - https://www.npmjs.com/package/typescript <br>
  - https://github.com/cucumber/cucumber-js <br>
For more execution command check package.json file. <br>

# Execution command <br>
- to run whole tests <br>
- > npx playwright test <br>
- to run particular profile <br>
- > npm run {profile name} like-> npm run regression <br>
- to execute particular test <br>
- npx playwright test tests/Placeorder.spec.ts <br>

# Allure reporting to get allure report simply run following command after execution <br>
> npx allure serve allure-results <br>
  

