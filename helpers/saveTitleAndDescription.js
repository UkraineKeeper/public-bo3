import fs from 'fs';
const { chromium } = require('playwright');

(async () => {
    const urls = fs.readFileSync('helpers/urls.txt', 'utf-8').split('\n').filter(Boolean);

    const resultsFile = 'helpers/results/metatags.csv';
    fs.writeFileSync(resultsFile, 'URL,Title,Description\n');

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    for (const url of urls) {
        try {
            console.log(`Обробляємо: ${url}`);
            await page.goto(url, { timeout: 30000 });
            await page.waitForTimeout(2000);
            const title = await page.title();
            const descriptionTag = await page.locator('meta[name="description"]');
const hasDescription = await descriptionTag.count();
const description = hasDescription ? await descriptionTag.getAttribute('content') : 'Description not found';


            const result = `"${url}","${title}","${description}"\n`;
            fs.appendFileSync(resultsFile, result);

        } catch (error) {
            console.error(`Помилка для URL ${url}:`, error.message);
            const result = `"${url}","Error","Error"\n`;
            fs.appendFileSync(resultsFile, result);
        }
    }

    await browser.close();
    console.log(`Готово! Результати збережено у файлі ${resultsFile}`);
})();
