import { expect, test } from "@playwright/test";

import { LoginPom } from "../pages/Login_pom.page";
import { ProduitPom } from "../pages/produit_pom.page";

let lp: LoginPom
let pm : ProduitPom

test.beforeEach("setup", async({page})=>{

await page.goto("https://www.saucedemo.com/")
lp = new LoginPom(page);
pm = new ProduitPom(page);

   // await lp.SaisirUsername("standard_user")
   // await lp.Saisirpassword("secret_sauce")
   // await lp.clickbutton()
   await lp.LogintoApp("standard_user", "secret_sauce")

})

// test("login valide POM", {tag:"@pom"}, async({page})=>
// {

//    await lp.SaisirUsername("standard_user")
//    await lp.Saisirpassword("secret_sauce")
//    await lp.clickbutton()
//    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

// })

test("Parcours ajout produit", {tag:"@pomi"}, async({page})=>
{

   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
   await pm.ajouterProduit()
   await expect(await pm.removeVisible()).toBe(true)
   await expect(await pm.verifieNbrProduit()).toBe("1")
   await pm.cliqueButtonPanier()
   await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")


})