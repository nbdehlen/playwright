const { test, expect } = require("@playwright/test")

const populateTwoTodos = async (page) => {
  await page.evaluate(() => {
    const todos = [
      { id: Math.random(), body: "example text one" },
      { id: Math.random(), body: "example text two" },
    ]
    window.localStorage.setItem("todos", JSON.stringify(todos))
  })
}

test.describe("Todo", () => {
  test.beforeEach(async ({ page, baseURL, browser }) => {
    // await page.setViewportSize({ width: 600, height: 600 })
    // window.screen.height = 600
    // window.screen.width = 600
    // browser.newContext({})
    await page.goto(baseURL)
    await page.waitForSelector("#todo-container")
  })

  //   test.afterAll(async ({ browser }) => {
  //     browser.close()
  //   })

  test("Should render empty todos", async ({ page }) => {
    const $container = page.locator("data-test-id=todo-list")
    const containerChildCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(containerChildCount).toBe(0)
  })

  test("Should render todo list", async ({ page }) => {
    await populateTwoTodos(page)

    // reload with updated storage
    await page.reload()

    const $container = page.locator("data-test-id=todo-list")
    const ListItemCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(ListItemCount).toBe(2)

    const $listItemTwoBody = page.locator("data-test-id=todo-item-1-body")
    const listItemTwoBody = await $listItemTwoBody.evaluate(
      (elem) => elem.innerText
    )
    expect(listItemTwoBody).toEqual("example text two")
  })

  test("Should create todo", async ({ page }) => {
    const $input = page.locator("data-test-id=todo-list-input")
    const text = "new example text 1"
    await $input.fill(text)

    const $submitInput = page.locator("data-test-id=todo-list-submit")
    await $submitInput.click()

    const $container = page.locator("data-test-id=todo-list")
    const containerChildCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(containerChildCount).toBe(1)

    const $listItemOneBody = page.locator("data-test-id=todo-item-0-body")
    const listItemOneBody = await $listItemOneBody.evaluate(
      (elem) => elem.innerText
    )

    expect(listItemOneBody).toEqual(text)
  })

  test("Should edit one todo", async ({ page }) => {
    await populateTwoTodos(page)

    // reload with updated storage
    await page.reload()

    // pressing edit todo button to select the todo to edit
    const $editButtonOne = page.locator("data-test-id=todo-item-1-edit")
    await $editButtonOne.click()

    // update input
    const $input = page.locator("data-test-id=todo-list-input")
    const updatedText = "updated example text two"
    await $input.fill(updatedText)

    const $submitInput = page.locator("data-test-id=todo-list-submit")
    await $submitInput.click()

    const $listItemTwoBody = page.locator("data-test-id=todo-item-1-body")
    const listItemTwoBody = await $listItemTwoBody.evaluate(
      (elem) => elem.innerText
    )

    expect(listItemTwoBody).toEqual(updatedText)
  })

  test("Should remove one todo", async ({ page }) => {
    await populateTwoTodos(page)

    // reload with updated storage
    await page.reload()

    const $removeButtonOne = page.locator("data-test-id=todo-item-0-remove")
    await $removeButtonOne.click()

    const $container = page.locator("data-test-id=todo-list")
    const containerChildCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    console.log({ containerChildCount })
    expect(containerChildCount).toBe(1)
  })
})
