import {test as base, expect, Page} from "@playwright/test" // je vais importer un test comme une base pour l'etendre après

type Fixtures = {
    loggedPage: Page;
    invalideLoggedPage: Page;

}

export const test =  base.extend<Fixtures>({

loggedPage: async({page},use)=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await use (page)

},
invalideLoggedPage: async({page},use)=>{
     await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("starrrndard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await use (page)


}


})

export {expect}

