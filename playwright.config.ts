import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  timeout: 30 * 1000, // 30000 ms (30 secs)

  testDir: './tests',

  fullyParallel: false,

  // Retries only in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],

  use: {
    // baseURL: process.env.BASE_URL || 'http://localhost:3000',
    baseURL: 'https://tutorialsninja.com/demo/',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    headless: false,

    viewport: {
      width: 1280,
      height: 720
    },

    ignoreHTTPSErrors: true,

    permissions: ['geolocation'],
  },

  // grep: /@master/,

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /*
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    }
    */
  ],

});