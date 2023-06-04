import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  expect: {
    timeout: 5000,
  },
  forbidOnly: Boolean(process.env.CI),
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     ignoreHTTPSErrors: true,
    //   },
    // },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  reporter: process.env.CI ? 'html' : 'line',
  retries: process.env.CI ? 2 : 0,
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  webServer: [
    {
      command: 'yarn serve',
      port: 3000,
    },
  ],
  workers: process.env.CI ? 1 : undefined,
}

export default config
