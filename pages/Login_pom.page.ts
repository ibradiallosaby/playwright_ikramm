import {Page} from "@playwright/test"

export class LoginPom{

 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 //definier les locators de la page login

 elements = {
   
    username : ()=> this.page.locator("#user-name"),
    password : ()=> this.page.locator("#password"),
    loginButton : ()=> this.page.locator("#login-button"),
    msgerror : ()=> this.page.locator('[data-test="error"]')



 }

 // Definier les methodes associés

 async SaisirUsername(identifiant : string)
 {
    await this.elements.username().fill(identifiant) 

 }

async Saisirpassword(mot_de_pass : string)
 {
    await this.elements.password().fill(mot_de_pass) 

 }

 async clickbutton()
 {
    await this.elements.loginButton().click() 

 }

  async verifiemessage(): Promise <string |null >
 {
   return await this.elements.msgerror().textContent()

 }

 getverifiemessage()
 {
   return  this.elements.msgerror()

 }


  async visibilityemessage()
 {
   return await this.elements.msgerror().isVisible()

 }


  async LogintoApp(u:string, p:string)
 {
    await this.SaisirUsername(u)
    await this.Saisirpassword(p)
    await this.clickbutton()


 }


}
