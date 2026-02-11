

const {test,expect} = require('@playwright/test');

test ('Launch the application', async ({page})=>
{

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    console.log(await page.title());
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    console.log("login done");
    await page.pause();

});

