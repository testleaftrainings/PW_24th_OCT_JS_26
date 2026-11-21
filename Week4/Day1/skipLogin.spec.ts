import test from "@playwright/test";

test.use({storageState:'Data/leafTaps.json'})

test('skip login',async({page})=>{

    await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home')
    await page.getByText('Accounts',{exact:true}).click()

})