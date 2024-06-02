const { test, expect, request } = require('@playwright/test');
const {APiUtils} = require('../utils/APiUtils');
let response;

const loginPayLoad = { userEmail: "sabir000@gmail.com", userPassword: "AbrarSabir1" };
const orderPayLoad = { "orders": [{ country: "Bangladesh", productOrderedId: "6581ca979fd99c85e8ee7faf" }] };

test.beforeAll(async () => {
    //Login API
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext, loginPayLoad);
    response = await apiUtils.createorder(orderPayLoad)
   
})


test('Verify order is showing in order history page', async ({ page }) => {

    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        console.log(rowOrderId);
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    //Lots of validation can be done in this order details page
    await expect(page.locator(".tagline")).toHaveText("Thank you for Shopping With Us");
    const actualOrderId = await page.locator(".col-text").textContent();
    //await page.pause();
    expect(response.orderId.includes(actualOrderId)).toBeTruthy();
});

//verify if order created is showing in history page
// Precondition - create order (need to discuss with developer for api or check in Network of inspect)