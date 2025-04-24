# cover-playwright
Репозиторій автотестів з Playwright / TS

## Setup
npm install playwright@latest

# Daily tests
npx playwright test userDev.spec.ts guestTests.spec.ts

# Localized test for different envs
- TEST_ENV=stage LOCALE=pt npx playwright test guestTests.spec.ts -g "guestLast - Post scheduled comment"
- TEST_ENV=stage LOCALE=fr npx playwright test screenCheck.spec.ts --project="Mobile Chrome"
- TEST_ENV=prod LOCALE=ja npx playwright test tests.spec.ts -g "Check nav to News"

# Allure try
npm run allure:full
