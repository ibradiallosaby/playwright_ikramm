import {test, expect} from "@playwright/test";

test.beforeEach("setup",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
})

test.beforeEach("teardown", async({page})=>{

await page.context().clearCookies()
await page.evaluate(()=>localStorage.clear())


})

test ("login valide ",{tag: "@TNR"} , async ({page}) =>{
    //
// aller visiter l'url de sauce demo
//await page.goto("https://www.saucedemo.com/")

// saisir username
await page.locator("#user-name").fill("standard_user")

// saisir password 
await page.locator("#password").fill("secret_sauce")

// clique sur le bouton login 
await page.locator("#login-button").click()

//redirection page produit

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")



} )



test ("login invalide ", {tag: ["@smoke","@TNR"]} , async ({page}) =>{

// aller visiter l'url de sauce demo
// await page.goto("https://www.saucedemo.com/")

// saisir username
await page.locator("#user-name").fill("standard_user")

// saisir password 
await page.locator("#password").fill("secret_saucefinal")

// clique sur le bouton login 
await page.locator("#login-button").click()

//redirection page produit
await expect(page.locator("[data-test='error']")).toBeVisible()

//await expect(page.locator("[data-test='error']")).toContainText("Epic sadface: Username and password do not match any user in this service")

} )

test ("login invalide with locator d'accessibility ", {tag: ["@smoke","@TNR"]} , async ({page}) =>{

// aller visiter l'url de sauce demo
// await page.goto("https://www.saucedemo.com/")

// saisir username
await page.getByRole("textbox", {name:"Username"}).fill("username")
await page.getByRole("textbox", {name:"Password"}).fill("username")

await page.getByRole("button", {name:"login"}).click()


// saisir password 


// clique sur le bouton login 

//redirection page produit
await expect(page.getByRole("alert")).toBeVisible()

//await expect(page.locator("[data-test='error']")).toContainText("Epic sadface: Username and password do not match any user in this service")

} )

