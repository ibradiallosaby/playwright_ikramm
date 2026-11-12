import {test} from "../fixtures/test-Pom-probase"
import {expect} from "@playwright/test";

test ("login valide", async ({loginvalidePom})=>{

await expect(loginvalidePom.page).toHaveURL("https://www.saucedemo.com/inventory.html")

})


test ("login invalide", async ({inValidePomlogin})=>{

await expect(inValidePomlogin.page.getByRole("alert")).toBeVisible()
    
})