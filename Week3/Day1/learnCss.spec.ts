import test from "@playwright/test";

test('learn css selector',async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/login')

    //await page.locator('#username').fill('democsr')
    await page.locator('input').first().fill('democsr')

    //await page.locator('[name="PASSWORD"]').fill('crmsfa')
    await page.locator('input').nth(1).fill('democsr')

    await page.locator('.decorativeSubmit').click()

    await page.locator('text=CRM/SFA').click()

    await page.waitForLoadState('domcontentloaded')
      let pageTitle =  await page.title()
        console.log(pageTitle);

        let pageUrl = page.url()
        console.log(pageUrl);
        
        
})