

const {test} = require('@playwright/test');

test ('Launch the application', async ({page})=>
{

    await page.goto("https://www.saucedemo.com/");
    await page.pause();

});

