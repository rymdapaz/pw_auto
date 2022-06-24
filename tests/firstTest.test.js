const { test, expect } = require("@playwright/test");

test('Opening main page', async ({page}) => {
    await page.goto('http://lb-server-347586907.us-east-2.elb.amazonaws.com/');
    const title_txt = page.locator('#header-female');
    await expect(title_txt).toHaveText('female')
});