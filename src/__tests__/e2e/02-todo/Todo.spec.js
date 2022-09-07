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

test.describe("It should have full CRUD functionality", () => {
  test.beforeEach(async ({ page, baseURL, browser }) => {
    await page.goto(`${baseURL}/todo`)

    await page.waitForSelector("#todo-container")
  })

  test("Should render empty todos", async ({ page }) => {
    /* Assert */
    const $container = page.locator("data-testid=todo-list")
    const containerChildCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(containerChildCount).toBe(0)
  })

  test("Should render todo list", async ({ page }) => {
    /* Arrange */
    await populateTwoTodos(page)

    // reload with updated storage
    await page.reload()

    /* Assert */
    const $container = page.locator("data-testid=todo-list")
    const ListItemCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(ListItemCount).toBe(2)

    const $listItemTwoBody = page.locator("data-testid=todo-item-1-body")
    const listItemTwoBody = await $listItemTwoBody.evaluate(
      (elem) => elem.innerText
    )
    expect(listItemTwoBody).toEqual("example text two")
  })

  test("Should create todo", async ({ page }) => {
    /* Arrange */
    const text = "new example text 1"
    const $input = page.locator("data-testid=todo-list-input")
    await $input.fill(text)

    /* Act */
    const $submitInput = page.locator("data-testid=todo-list-submit")
    await $submitInput.click()

    /* Assert */
    const $container = page.locator("data-testid=todo-list")
    const containerChildCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(containerChildCount).toBe(1)

    const $listItemOneBody = page.locator("data-testid=todo-item-0-body")
    const listItemOneBody = await $listItemOneBody.evaluate(
      (elem) => elem.innerText
    )
    expect(listItemOneBody).toEqual(text)
  })

  test("Should edit one todo", async ({ page }) => {
    /* Arrange */
    await populateTwoTodos(page)

    // reload with updated storage
    await page.reload()

    /* Act */
    // pressing edit todo button to select the todo to edit
    const $editButtonOne = page.locator("data-testid=todo-item-1-edit")
    await $editButtonOne.click()

    // update input
    const $input = page.locator("data-testid=todo-list-input")
    const updatedText = "updated example text two"
    await $input.fill(updatedText)

    const $submitInput = page.locator("data-testid=todo-list-submit")
    await $submitInput.click()

    /* Assert */
    const $listItemTwoBody = page.locator("data-testid=todo-item-1-body")
    const listItemTwoBody = await $listItemTwoBody.evaluate(
      (elem) => elem.innerText
    )
    expect(listItemTwoBody).toEqual(updatedText)
  })

  test("Should remove one todo", async ({ page }) => {
    /* Arrange */
    await populateTwoTodos(page)

    // reload with updated storage
    await page.reload()

    /* Act */
    const $removeButtonOne = page.locator("data-testid=todo-item-0-remove")
    await $removeButtonOne.click()

    /* Assert */
    const $container = page.locator("data-testid=todo-list")
    const containerChildCount = await $container.evaluate(
      (elem) => elem.childElementCount
    )
    expect(containerChildCount).toBe(1)
  })
})
