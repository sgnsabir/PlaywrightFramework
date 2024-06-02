const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("sabir000@gmail.com");
    await page.locator("#userPassword").fill("AbrarSabir1");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
    
   
})


test('Complete a particular item to cart', async () => {
    const productName = "ADIDAS ORIGINAL";   
    const email = "sabir000@gmail.com";
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    const prodTitles = await page.locator(".card-body").locator("b").allTextContents();
    console.log(prodTitles);
    const prodCount = await page.locator(".card-body").count();
    for (let i = 0; i < prodCount; i++) {
        if (await page.locator(".card-body").nth(i).locator("b").textContent() === productName) {
            //console.log("invoked in if");
            await page.locator(".card-body").nth(i).locator("text=  Add To Cart").click();
            break;
        }
    }
    //Cart page
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").last().waitFor();
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    //Checkout
    await page.locator("text=Checkout").click();

    //Personal Information
    //coupon: rahulshettyacademy

    //Shipping information, dealing with dynamic list to place order
    await page.locator("[placeholder*='Country']").pressSequentially("Ban")
    const dropDown = await page.locator(".ta-results");
    await dropDown.waitFor();
    const optionsCount = await dropDown.locator("button").count();
    for (let i = 0; i < optionsCount; i++) {
        const country = await dropDown.locator("button").nth(i).textContent();
        if (country === " Bangladesh") {
            await dropDown.locator("button").nth(i).click();
            break;
        }
    }

    //correct Email validation
    await expect(page.locator(".user__name label")).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    //View the order details from Orders page
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    //Order page
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++){
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        console.log(rowOrderId);
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    //Lots of validation can be done in this order details page
    await expect(await page.locator(".tagline")).toHaveText("Thank you for Shopping With Us");
    const actualOrderId = await page.locator(".col-text").textContent();
    expect(orderId.includes(actualOrderId)).toBeTruthy();
});

test('Get all products title', async () => {
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator(".card-body").last().waitFor();
    const prodTitles = await page.locator(".card-body").locator("b").allTextContents();
    console.log("2nd test running.................");
    console.log(prodTitles);

});

//verify if order created is showing in history page
// Precondition - create order (need to discuss with developer for api or check in Network of inspect)