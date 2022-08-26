import { editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should retrieve the todo list in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })

  it("Should retreive two todos from localStorage", () => {
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
    const savedTodos = getTodos()
    expect(savedTodos.length).toEqual(2)
  })

  it("Should not return any todos from localStorage", () => {
    const todos = getTodos()
    expect(todos.length).toEqual(0)
  })
})
