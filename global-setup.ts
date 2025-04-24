import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFile = 'helpers/playwright-console.log';

async function globalSetup(config: FullConfig) {
    const ENV = process.env.TEST_ENV || 'prod';
    
    dotenv.config({ path: path.resolve(__dirname, `./env/.env.${ENV}`) });

    const locale = process.env.LOCALE || 'en';
    process.env.LOCALE_PREFIX = locale === 'en' ? '' : `/${locale}`;
}

export default globalSetup;


// import { FullConfig } from '@playwright/test';
// import dotenv from 'dotenv';
// import path from 'path';

// const logFile = 'helpers/playwright-console.log';

// async function globalSetup(config: FullConfig) {
//     const ENV = process.env.TEST_ENV || 'prod';
//     dotenv.config({ path: path.resolve(__dirname, `./env/.env.${ENV}`) });

//     const locale = process.env.LOCALE || 'en';
//     process.env.LOCALE_PREFIX = locale === 'en' ? '' : `/${locale}`;
// }

// export default globalSetup;