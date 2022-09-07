const { test, expect } = require("@playwright/test")

test.describe("It should navigate to the correct pages", () => {
  test("It should navigate to Todo page", async ({ page, baseURL }) => {
    /* Act */
    // Pressing nav link to todo page
    await page.goto(baseURL)

    const $todoLink = page.locator("data-testid=todo-link")
    await $todoLink.click()

    /* Assert */
    const $title = page.locator("h2")
    const titleText = await $title.evaluate((elem) => elem.innerHTML)

    expect(titleText).not.toBe(undefined)
  })

  test("It should navigate to 404 page", async ({ page, baseURL }) => {
    /* Act */
    await page.goto(`${baseURL}/this-is-wrong`)

    /* Assert */
    const $title = page.locator("data-testid=page-not-found")
    const titleText = await $title.evaluate((elem) => elem.innerHTML)

    expect(titleText).toContain("404" || "not found")
  })
})
