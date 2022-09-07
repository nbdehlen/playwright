import { editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should retrieve the todo list in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })

  it("Should retreive two todos from localStorage", () => {
    /* Arrange */
    const todos = [
      {
        body: "example text",
        id: Math.random(),
      },
      {
        body: "example text two",
        id: Math.random(),
      },
    ]
    todos.map(editTodos)

    /* Act */
    const savedTodos = getTodos()

    /* Assert */
    expect(savedTodos.length).toEqual(2)
  })

  it("Should not return any todos from localStorage", () => {
    /* Act */
    const todos = getTodos()

    /* Assert */
    expect(todos.length).toEqual(0)
  })
})
