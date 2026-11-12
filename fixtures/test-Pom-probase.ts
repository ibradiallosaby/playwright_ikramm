import {test as base, Page} from "@playwright/test" // je vais importer un test comme une base pour l'etendre après
import { LoginPom } from "../pages/Login_pom.page"

type Fixtures = {
    HomePage: Page;
    loginvalidePom: LoginPom;
    inValidePomlogin:LoginPom
}

export const test =  base.extend<Fixtures>({

HomePage: async({page},use)=>{
    await page.goto("https://www.saucedemo.com/")
    await use (page)

},


loginvalidePom: async({HomePage},use)=>{

    const lp = new LoginPom(HomePage)
    await  lp.LogintoApp("standard_user", "secret_sauce")
    await use (lp)
},

inValidePomlogin: async({HomePage},use)=>{

    const lp = new LoginPom(HomePage)
    await  lp.LogintoApp("standard_useuu", "secret_sauce")
    await use (lp)
}




})

