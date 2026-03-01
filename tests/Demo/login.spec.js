import { test, expect } from '@playwright/test';
import loginPage from '../../pages/loginPg.js';

test('Login with valid credentials', async ({ page }) => {
    const lp = new loginPage(page);
    await lp.navigate();
    await lp.enterUsername('tomsmith');
    await lp.enterPassword('SuperSecretPassword!');
    await lp.clickLoginButton();
});