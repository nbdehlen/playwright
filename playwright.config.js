// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
  },
  reporter: "list",
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
    // {
    //   name: "Smoke Chromium Follow along",
    //   testDir: "./src/__tests__/e2e",
    //   use: {
    //     browserName: "chromium",
    //     baseURL: "http://localhost:3000",
    //     headless: false,
    //     viewport: {
    //       height: 600,
    //       width: 600,
    //     },
    //     launchOptions: {
    //       slowMo: 1000,
    //     },
    //   },
    // },
  ],
}

module.exports = config
