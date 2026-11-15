import test, { expect } from "@playwright/test";

test('Learn assertions in playwright',async({page})=>{
 
    await page.goto('https://leaftaps.com/opentaps/control/login')

    const Title = await page.title()
    console.log(Title); //Leaftaps - TestLeaf Automation Platform

    const url = page.url()
    console.log(url); //https://leaftaps.com/opentaps/control/login

    //retry assertion or locator based assertion

    await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/login')
    //expect(page).toHaveTitle('- TestLeaf Automation Platform')//fails
    await expect.soft(page).toHaveTitle('- TestLeaf Automation Platform')

    /* 
    Non retry assertion ot generic assertion
    by default(hard or normal assertion) 
    if title doesnt match the test fails immediately
    the ramaing lines of code will not executed*/
    expect(Title).toBe('Leaftaps - TestLeaf Automation Platform')
    
    /* soft assertions
    if the title doesn't match, the assertion is recorded as failed
    but the test continues to execute the remaining lines of code */

    expect.soft(Title).toBe('TestLeaf Automation Platform')
    expect(url).toContain('//leaftaps.com/opentaps/control/login')

    console.log('Assertion completed successfully');

    //locator or retry assertion

    await expect(page.locator('//input[@id="username"]')).toBeVisible()

    //locator assertion using variable reference
    const password = page.locator('//input[@id="password"]');

    await expect(password).toBeEditable()
    await expect(password).toBeEnabled()
    await expect(password).toBeEmpty()

   //assertion timeout(default its 5s or 5000ms),
   //await expect(password).toBeHidden({timeout:2000}) 

    //action timeout
    await page.locator('#username').fill('democsr',{timeout:5000})
    
    
})