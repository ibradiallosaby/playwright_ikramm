import {test, expect} from "../fixtures/test-probase"


test ("login valide", async ({loggedPage})=>{

await expect(loggedPage).toHaveURL("https://www.saucedemo.com/inventory.html")

})


test ("login invalide", async ({invalideLoggedPage})=>{

await expect(invalideLoggedPage.getByRole("alert")).toBeVisible()
    
})