import { promises as fs } from 'fs';

const logFile = 'helpers/playwright-console.log';

export async function clearLogFile() {
    try {
        await fs.writeFile(logFile, ''); // Очищаємо файл перед запуском тестів
    } catch (error) {
        console.error('Error clearing log file:', error);
    }
}

// Налаштування логування
export function setupLogging(getTestName: () => string) {
    const originalConsoleLog = console.log;

    console.log = async (...args) => {
        const timestamp = new Date().toISOString();
        const testName = getTestName() || 'UNKNOWN TEST';
        const message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg)).join(' ');

        try {
            await fs.appendFile(logFile, `[${timestamp}] [${testName}] ${message}\n`); // Асинхронний запис в лог
        } catch (error) {
            console.error('Error writing to log file:', error);
        }

        originalConsoleLog(...args); // Виведення в консоль
    };
}