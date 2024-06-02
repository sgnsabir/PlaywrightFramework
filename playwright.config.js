// @ts-check
const { devices } = require('@playwright/test');
const { permission } = require('process');

const config = {
  testDir: './tests',
  retries: 1,
  workers: 3,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

//  npx allure serve allure- results

  //reporter: [["html"], ["line"], ["allure-playwright"]],
  reporter: [["line"], ["allure-playwright"]],
  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true, //false/true
        screenshot: 'retain-on-failure',
        trace: 'retain-on-failure', //off, on, retain-on-failure
        ...devices['iPhone 11'] //responsive page validation
      }
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'retain-on-failure',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permission:['geolocation'],
        trace: 'retain-on-failure', //off, on, 'retain-on-failure'
        //viewport: {width:720, height:720} //Mobile friendly to test responsiveness
        //...devices['Pixel 7'] //responsive page validation
      }
    }
    
  ]
  
};

module.exports = config;
