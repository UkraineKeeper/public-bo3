import fs from 'fs';
import path from 'path';

const allureResults = 'allure-results';
const allureReport = 'allure-report';
const allureHistory = path.join(allureResults, 'history');  // Копіюємо історію сюди

// Переконуємось, що папка history існує
if (!fs.existsSync(allureHistory)) {
  fs.mkdirSync(allureHistory, { recursive: true });
}

// Копіюємо файли історії з `allure-report/history/` в `allure-results/history/`
const reportHistory = path.join(allureReport, 'history');

if (fs.existsSync(reportHistory)) {
  fs.readdirSync(reportHistory).forEach(file => {
    const srcPath = path.join(reportHistory, file);
    const destPath = path.join(allureHistory, file);

    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log(`📦 Історія перенесена в ${allureHistory}`);


// ------ Взагалі не працювало
// import fs from 'fs';
// import path from 'path';

// const allureResults = 'allure-results'; // Папка для результатів тестів
// const allureReport = 'allure-report';   // Папка для Allure звіту
// const allureHistory = path.join(allureReport, 'history'); // Папка для збереження історії тестів
// const today = new Date();
// const dateStr = today.toISOString().split('T')[0];  // Формат YYYY-MM-DD
// const timeStr = today.toISOString().split('T')[1].split('.')[0];  // Формат HH-MM-SS

// // Створюємо підпапку для результатів поточного дня й часу
// const resultFolderPath = path.join(allureResults, `${dateStr}-${timeStr}`);
// if (!fs.existsSync(resultFolderPath)) {
//   fs.mkdirSync(resultFolderPath, { recursive: true });
// }

// // Переміщаємо файли з поточної папки allure-results в новостворену
// fs.readdirSync(allureResults).forEach(file => {
//   const srcPath = path.join(allureResults, file);
//   const destPath = path.join(resultFolderPath, file);

//   if (fs.statSync(srcPath).isFile()) {
//     fs.renameSync(srcPath, destPath);  // Переміщаємо файли в allure-last
//   }
// });

// console.log(`📦 Результати тестів збережено в ${resultFolderPath}`);

// // Створюємо папку для історії тестів, якщо її немає
// if (!fs.existsSync(allureHistory)) {
//   fs.mkdirSync(allureHistory, { recursive: true });
// }

// // Копіюємо файли з history в allure-report/history (додавання до історії)
// fs.readdirSync(allureResults).forEach(file => {
//   const srcPath = path.join(allureResults, file);
//   const destPath = path.join(allureHistory, file);

//   if (fs.statSync(srcPath).isFile()) {
//     fs.copyFileSync(srcPath, destPath);  // Копіюємо файли для історії
//   }
// });

// console.log(`📦 Історія тестів скопійована в ${allureHistory}`);

// ------- Раніше працювало, зараз ні
// import fs from 'fs';
// import path from 'path';

// const allureLast = 'allure-last';  // Папка, де зберігаються останні результати тестів
// const allureResults = 'allure-results';  // Папка для Allure звіту
// const today = new Date();
// const dateStr = today.toISOString().split('T')[0];  // Формат YYYY-MM-DD
// const timeStr = today.toISOString().split('T')[1].split('.')[0];  // Формат HH-MM-SS

// // Створюємо підпапку для результатів поточного дня й часу
// const resultFolderPath = path.join(allureLast, `${dateStr}-${timeStr}`);
// if (!fs.existsSync(resultFolderPath)) {
//   fs.mkdirSync(resultFolderPath, { recursive: true });
// }

// // Переміщаємо файли з поточної папки allure-results в allure-last
// fs.readdirSync(allureResults).forEach(file => {
//   const srcPath = path.join(allureResults, file);
//   const destPath = path.join(resultFolderPath, file);

//   if (fs.statSync(srcPath).isFile()) {
//     fs.renameSync(srcPath, destPath);  // Переміщаємо файли в allure-last
//   }
// });

// console.log(`📦 Результати тестів збережено в ${resultFolderPath}`);