

const {test,expect} = require('@playwright/test');

test ('Launch the application', async ({page})=>
{

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    console.log(await page.title());

});

