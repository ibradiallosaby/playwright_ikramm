import { expect, test } from "@playwright/test";

import { LoginPom } from "../pages/Login_pom.page";

let lp: LoginPom

test.beforeEach("setup", async({page})=>{

await page.goto("https://www.saucedemo.com/")
lp = new LoginPom(page);

})

test("login valide POM", {tag:"@pom"}, async({page})=>
{

   // await lp.SaisirUsername("standard_user")
   // await lp.Saisirpassword("secret_sauce")
   // await lp.clickbutton()
   await lp.LogintoApp("standard_user", "secret_sauce")
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

})

test("login invalide POM", {tag:"@pomi"}, async({page})=>
{

   // await lp.SaisirUsername("locked_out_usere")
   // await lp.Saisirpassword("secret_sauce")
   // await lp.clickbutton()
   await lp.LogintoApp("standard_userr", "secret_sauce")
   const message_attendu ="Epic sadface: Username and password do not match any user in this service"
   const message_obtenu = await lp.verifiemessage() ;
   //await expect(await lp.verifiemessage()).toBe(message_attendu)
    //await expect(lp.getverifiemessage()).toHaveText(message_attendu)

   await expect(lp.visibilityemessage()).toBeTruthy()

})        