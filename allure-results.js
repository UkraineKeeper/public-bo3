import fs from 'fs';
import path from 'path';

const allureResults = 'allure-results';  // Папка для Allure звітів
const allureLast = 'allure-last';        // Папка з результатами тестів в підпапках

// Копіюємо всі файли з підпапок в allure-last в allure-results
fs.readdirSync(allureLast).forEach(folder => {
  const folderPath = path.join(allureLast, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    fs.readdirSync(folderPath).forEach(file => {
      const srcPath = path.join(folderPath, file);
      const destPath = path.join(allureResults, file);

      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath); // Копіюємо файли в allure-results
      }
    });
  }
});

console.log(`📦 Результати тестів скопійовані в ${allureResults}`);
