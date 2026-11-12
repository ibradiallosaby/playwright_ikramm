import {test as base, expect} from "@playwright/test" // je vais importer un test comme une base pour l'etendre après

export const test= base.extend({
    page: async ({page}, use ) => {
         
        await page.goto("https://www.saucedemo.com/")
        await use (page)

    }

})

export {expect}

