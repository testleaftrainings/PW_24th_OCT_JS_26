/* Browser -> actual browser engine
context -> isolated and incognito window
page -> tab or page specific to the context */


import { chromium, firefox, test } from "@playwright/test";


test('learn to launch the browser',async()=>{
    let browser = await chromium.launch({channel:'chrome'})
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto('https://www.amazon.in/')

    //getting URL of the page
    console.log(page.url());
  await page.waitForLoadState('domcontentloaded')  
await page.waitForTimeout(3000)
//await page.waitForLoadState('networkidle')


//Returns the page's title.
const title = await page.title()
console.log(title);


})

/* Playwright execution command
npx playwright test filename.spec.ts
 */

//worker -> how many browser it launch parllel

//page fixture is a pre created browser tab/page given by playwright automatically for each tes
//playwright gives the page directly

/* 
let browser = await chromium.launch({channel:'chrome'})
    let context = await browser.newContext()
    let page = await context.newPage()
 */
//instead of writing the 3 lines of code forpage , we cn use inbuilt page fixture as below

test.only('learn to launch browser using page fixture',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.waitForTimeout(2000)
    //page.pause()
})