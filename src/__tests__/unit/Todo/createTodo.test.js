import { editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should create a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })

  it("Should create one todo note in localStorage", () => {
    const todo = {
      body: "example text",
      id: Math.random(),
    }
    editTodos(todo)
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(todo.body)
  })

  it("Should create an empty todo note in localStorage", () => {
    const todo = {
      body: "",
      id: Math.random(),
    }
    editTodos(todo)
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(todo.body)
  })
})
