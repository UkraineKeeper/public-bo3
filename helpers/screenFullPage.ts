import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Визначаємо __dirname вручну
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function screenFullPage(page, testName) {
    const url = page.url();
    console.log('Current URL:', url);
    console.log('Test Name:', testName);

    const formattedTestName = testName.replace(/[^a-zA-Z0-9]/g, '_');
    const formattedUrl = url.replace(/[^a-zA-Z0-9]/g, '_');

    const now = new Date();
    const date = now.toLocaleDateString('en-GB').replace(/\//g, '-');

    const screenshotName = `${formattedTestName}--${date}--${formattedUrl}.png`;
    
    const screenshotPath = path.join(__dirname, 'screenshots', screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: true });
}
