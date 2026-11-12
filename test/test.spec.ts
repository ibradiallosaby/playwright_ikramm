import {test, expect} from "@playwright/test";

test("My first test", async function ({page}){

await page.goto("https://www.saucedemo.com/")


})
// la fonction fleché
test("My first test 2", async ({page})=>{

await page.goto("https://www.saucedemo.com/")


})