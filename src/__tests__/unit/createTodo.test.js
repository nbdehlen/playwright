import { createTodo, getTodos } from "../../components/Todo/utils"

describe("It should create a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })

  it("Should create one todo note", () => {
    const todo = {
      body: "example text",
    }
    createTodo(todo)
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(todo.body)
  })
})
