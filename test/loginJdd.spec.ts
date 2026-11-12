import {test,expect} from "@playwright/test"
import { LoginPom } from "../pages/Login_pom.page"

import fs from 'fs' // file systeme , qui permet de lire le fichier csv

import {parse} from "csv-parse/sync" // importer un parseur pour convertir le fichier en objet java script

import path from "path" //le chemin d'emplacement 

let lp : LoginPom
const users = parse(fs.readFileSync(path.join(__dirname, "data/jdd.csv")),{
    columns: true,
    skip_empty_lines: true,
    

})

test("login with jdd ", {tag:"@pom"}, async({page})=>
{
   lp = new LoginPom(page)
   for(const user of users){
    
    await page.goto("https://www.saucedemo.com/")
    // await lp.SaisirUsername(user!.username) //! ni null ni indifined
    // await lp.Saisirpassword(user!.password)
    // await lp.clickbutton()
    await lp.LogintoApp(user!.username, user!.password)
    if(user!.result == "passed")
    {
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }
     if(user!.result == "failed")
    {
        await expect(await lp.visibilityemessage()).toBe(true)
       // await expect(lp.getverifiemessage()).toBeVisible()
    }

   }


})

