const config = {
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: "Smoke Chromium",
      testDir: "./src/__tests__/e2e",
      use: {
        browserName: "chromium",
      },
    },
    {
      name: "Smoke WebKit",
      testDir: "./src/__tests__/e2e",
      use: {
        browserName: "webkit",
      },
    },
    {
      name: "Smoke Firefox",
      testDir: "./src/__tests__/e2e",
      use: {
        browserName: "firefox",
      },
    },
  ],
}

module.exports = config
