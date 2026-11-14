import test from "@playwright/test";

test('Learn to handle dropdown by using select tag',async({page})=>{

    await page.goto('http://leafground.com/select.xhtml')

    //select dropdown

    await page.locator('[class="ui-selectonemenu"]').selectOption({label:'Playwright'})
    await page.waitForTimeout(2000)
    await page.locator('[class="ui-selectonemenu"]').selectOption({index:3})
    await page.waitForTimeout(2000)

    //all dropdown values

    let ddValues = page.locator('[class="ui-selectonemenu"]>option')

    //dropdown count
   let ddcount = await ddValues.count()
   console.log(ddcount);

   //for loop -> used for iteration

   for (let index = 0; index < ddcount; index++) {
    console.log(await ddValues.nth(index).innerText());
   }
   
})

test.only('learn to handle custom dropdown',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')

    //selecting the dropdown

    await page.locator('text=Select Country').nth(1).click()

    //select the desired otion from the dropdown

    await page.locator('[data-label="Germany"]').click()
})