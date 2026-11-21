import { test } from "@playwright/test";

test('Learn playwright locators',async({page})=>{
await page.goto('https://login.salesforce.com/?locale=in')

//await page.getByAltText('Salesforce login').click()//
 const username = page.getByLabel('Email', { exact: true });
 await username.fill('yuvarani.sekar@testleaf.com')
 await username.press('Enter')
 await page.getByTitle('https://orgfarm-d716fa5b16-dev-ed.develop.my.salesforce.com',{exact:true}).click()
 await page.getByLabel('Password for yuvarani.sekar@testleaf.com',{exact:true}).fill('Qeagle@123')
 await page.getByText('Log In',{exact:true}).click()
 await page.waitForTimeout(20000)
 await page.getByRole('button',{name:'App Launcher',exact:true}).click()
 await page.waitForLoadState('domcontentloaded')
 await page.getByLabel('View All Applications',{exact:true}).click()
 await page.getByPlaceholder('Search apps or items...',{exact:true}).fill("leads")

 //data-testid

 //await page.getByTestId('filter-bubble-trending-bubble').click()

})