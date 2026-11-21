import test from "@playwright/test";

test('learn storage state',async({page})=>{
   
    await page.goto('https://login.salesforce.com/?locale=in')

//await page.getByAltText('Salesforce login').click()//
 const username = page.getByLabel('Email', { exact: true });
 await username.fill('yuvarani.sekar@testleaf.com')
 await username.press('Enter')
 await page.getByTitle('https://orgfarm-d716fa5b16-dev-ed.develop.my.salesforce.com',{exact:true}).click()
 await page.getByLabel('Password for yuvarani.sekar@testleaf.com',{exact:true}).fill('Qeagle@123')
 await page.getByText('Log In',{exact:true}).click()
 await page.waitForTimeout(25000)
 await page.context().storageState({path:'Data/leafTaps.json'})
})