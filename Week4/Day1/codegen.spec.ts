import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('yuvarani.sekar@testleaf.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Enter');
  await page.goto('https://login.salesforce.com/environments');
  await page.getByRole('listitem').filter({ hasText: 'testleafEdit the environment name.yuvarani.sekar@testleaf.comSalesforce: Free' }).getByRole('link').click();
  await page.getByRole('textbox', { name: 'Password for yuvarani.sekar@' }).click();
  await page.getByRole('textbox', { name: 'Password for yuvarani.sekar@' }).fill('Qeagle@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Verification Code' }).fill('194071');
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home');
  await expect(page.getByRole('link', { name: 'Accounts' })).toBeVisible();
  await page.getByRole('link', { name: 'Contacts' }).click();
  await expect(page.getByRole('link', { description: 'Contacts', exact: true })).toContainText('Contacts');
  await page.getByText('MenuDeveloper EditionSandbox').click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: 'Account Name' }).click();
  await page.getByRole('textbox', { name: 'Account Name' }).fill('yuva');
  await expect(page.getByRole('textbox', { name: 'Account Name' })).toHaveValue('yuva');
  await page.locator('div').filter({ hasText: /^Account Owner$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Cancel and close' }).click();
  await expect(page.locator('lst-list-view-manager-header')).toMatchAriaSnapshot(`
    - heading "Accounts Recently Viewed" [level=1]
    - 'button "Select a List View: Accounts"'
    - button "This list is pinned." [disabled]
    `);
  await page.getByText('items • Updated a minute agoSearch this list...Account Owner Alias isn\'t').click();
});