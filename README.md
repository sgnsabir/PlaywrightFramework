# Playwright Framework Project Demonstration

This project demonstrates a robust Playwright testing framework using multiple approaches and tools, including JavaScript with Mocha, TypeScript, and Cucumber BDD.

## Project Highlights

- Initial framework built using **JavaScript** with the **Mocha** test framework.
- One complete **end-to-end test case using TypeScript** to showcase TypeScript integration.
- **Cucumber BDD** framework integrated with a few demonstration test cases.
- Easy to set up and run in **VS Code** or any other preferred editor.

---

## Prerequisites & Setup

### Install Required Tools

1. **Node.js** – Download and install from [nodejs.org](https://nodejs.org/)
2. **VS Code Extensions** (install from VS Code Marketplace):

   - **Playwright Test for VS Code**
   - **Cucumber (Gherkin) Full Support**

### Additional References

- [Playwright Official Documentation](https://playwright.dev/docs/intro)
- [TypeScript on npm](https://www.npmjs.com/package/typescript)
- [Cucumber.js GitHub Repository](https://github.com/cucumber/cucumber-js)

---

## Installation

```bash
npm install
```

This installs all required dependencies as defined in `package.json`.

---

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests by Custom Profile

```bash
npm run <profile-name>
# Example:
npm run regression
```

### Run a Specific Test

```bash
npx playwright test tests/Placeorder.spec.ts
```

---

## Allure Reporting

To generate and view the Allure report after test execution:

```bash
npx allure serve allure-results
```

---

## Notes

- Check the `package.json` file for more custom scripts and configurations.
- This project is ideal for learning and demonstrating different approaches to E2E testing using Playwright.
