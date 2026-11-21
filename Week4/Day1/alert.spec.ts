import test, { expect } from "@playwright/test";



test('Learn to handle alert',async({page})=>{

    //register event listener page.on to handle the alert
    //page.on => handles all the alert present in the page
    //page.once => handle the first alert alone remaining alerts will not be handled 
    page.on('dialog',async(alert)=>{

        //step 1: 
        const message = alert.message()
        console.log(message);

        const alertType = alert.type()
        console.log(alertType);

        switch (alertType) {
            case "confirm":
                await alert.accept()                
                break;
                case "prompt":
                    await alert.accept("Yuvarani")
            break;
            default:
                await alert.accept()
        }
        

    })

    await page.goto('https://leafground.com/alert.xhtml')


    //to handle simple alert
    await page.locator("(//span[text()='Show'])[1]").click()
    await page.waitForTimeout(2000)

    //to handle confirm alert
    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(2000)

    //to handle prompt alert
    await page.locator("(//span[text()='Show'])[5]").click()
    let promptAlertVerification = await page.locator('#confirm_result').innerText()
    console.log(promptAlertVerification);
    
    expect(page.locator('#confirm_result')).toContainText('User entered name as: Yuvarani')
    await page.waitForTimeout(2000)
})