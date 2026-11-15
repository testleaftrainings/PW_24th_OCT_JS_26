import { test } from "@playwright/test";

test('Basic Xpath',async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/login')

    await page.locator('//input[@id="username"]').fill('democsr')

    await page.locator('//input[contains(@name,"PASS")]').fill('crmsfa')

    await page.locator('//input[@class="decorativeSubmit"]').click()

    await page.locator("//a[normalize-space()='CRM/SFA']").click()

    await page.waitForTimeout(2000)

})