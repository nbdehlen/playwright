// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: "Smoke WebKit",
      testDir: "./src/__tests__/e2e",

      use: {
        browserName: "webkit",
        baseURL: "http://localhost:3000",
        headless: true,
      },
    },

    {
      name: "Smoke Chromium",
      testDir: "./src/__tests__/e2e",
      use: {
        browserName: "chromium",
        baseURL: "http://localhost:3000",
        headless: true,
      },
    },
  ],
}

module.exports = config
