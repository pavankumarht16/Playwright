import {test, expect} from '@playwright/test'


// test('Add item from React', async({page})=>{
//     await page.goto('/');

// //  await page.fill('input[placeholder="Enter Item"]',"Platinum");
//     await page.fill('[data-testid="item-input"]', 'Platinum');
//     await page.fill('[data-testid="price-input"]', '100');

//     await page.click('text=Add')

//     await expect(page.locator('text=Platinum - 100')).toBeVisible();
// });

test('Add item from React', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('[data-testid="item-input"]', { timeout: 10000 });

  await page.fill('[data-testid="item-input"]', 'Platinum');
  await page.fill('[data-testid="price-input"]', '100');
  await page.click('text=Add');
page.on('console', msg => console.log(msg.text()));
page.on('requestfailed', req => console.log('FAILED:', req.url()));
  await expect(page.locator('text=Platinum - 100')).toBeVisible({ timeout: 5000 });
});