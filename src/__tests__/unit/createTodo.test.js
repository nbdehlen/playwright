import { editTodos, getTodos } from "../../components/Todo/utils"

describe("It should create a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })

  it("Should create one todo note", () => {
    const todo = {
      body: "example text",
      id: Math.random(),
    }
    editTodos(todo)
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(todo.body)
  })
})
