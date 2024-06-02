const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const {POManager} = require('../../pageobjects/POManager');
let poManager;

Given('a login to Ecommerce application with {string} and {string}', {timeout: 100*1000}, async function (username, password) {
    poManager = new POManager(this.page);
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.goTo();
    await this.loginPage.validLogin(username, password);
});

When('Add {string} to Cart', async function (productName) {
    this.dashboardPage = poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName); 
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function (productName) {   
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function () {
    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("Ban", "Bangladesh");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order is present in the OrderHistory', async function () {
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
//Wrong credentials errorMessage Validation, (this tc for different page)
Given('Go to Login page', async function () {
   poManager = new POManager(this.page);
    this.loginPageTest = poManager.getLoginPageTest();
    await this.loginPageTest.goTo();
  });

When('Type incorrect email or password {string} and {string}', async function (username, wrongpassword) {
    await this.loginPageTest.invalidLogin(username, wrongpassword);
  });

  Then('Error Message is displayed',{timeout: 100*1000},  async function () {
    await expect(await this.loginPageTest.errorMessageLocator()).toContainText("Incorrect");
  });

  //UnregisteredUserErrorValidation
  Given('Navigate to Forgot password page', async function () {
    this.loginPageErrorValidation = poManager.getLoginPageErrorValidation();
    await this.loginPageErrorValidation.goToForgotPasswordPage();
  });

  When('Type not registered email {string} and valid {string}',{timeout: 1000*1000}, async function (unregisteredEmail, password) {
      console.log("Invoked in When");
      await this.loginPageErrorValidation.validateErrorUnregisteredEmail(unregisteredEmail, password);
  });

  Then('Verify error message', async function () {
       expect(await this.loginPageErrorValidation.unregUsrErrMsg()).toContain("User Not found.");
  });










// Given('a login to Ecommerce2 application with {string} and {string}', async function (string, string2) {
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     await console.log(await page.title());
//     await expect(page).toHaveTitle("this.loginPage Practise | Rahul Shetty Academy");
//     //css
//     await page.locator("#username").fill("rahulshettyacademy");
//     await page.locator("[type='password']").fill("learnin");
//     await page.locator("#signInBtn").click();
// });
  
// When('Error Message is displayed {string}', async function (string) {    
//     console.log(await page.locator("[style*='block']").textContent());
//     const locator = page.locator("[style*='block']");
//     await expect(locator).toContainText("Incorrect");
// });


  