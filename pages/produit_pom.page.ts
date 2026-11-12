import {Page} from "@playwright/test"

export class ProduitPom{

 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 //definier les locators de la page login

 elements = {
   
    add_produit : ()=> this.page.locator("#add-to-cart-sauce-labs-backpack"),
    remove_produit : ()=> this.page.locator("#remove-sauce-labs-backpack"),
    nbr_panier : ()=> this.page.locator("[data-test='shopping-cart-badge']"),
    panier_button :()=> this.page.locator("[data-test='shopping-cart-link']")


 }

 // Definier les methodes associés

 async ajouterProduit()
 {
    await this.elements.add_produit().click()

 }

async removeVisible()
 {
   return await this.elements.remove_produit().isVisible()

 }


  async verifieNbrProduit(): Promise <string |null >
 {
   return await this.elements.nbr_panier().textContent()

 }

  async cliqueButtonPanier()
 {
    await this.elements.panier_button().click()

 }


 



 }





