import { editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should edit a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })
  const todoId = Math.random()
  it("Should edit a todo note", () => {
    /* Arrange */
    const todo = {
      body: "example text",
      id: todoId,
    }
    editTodos(todo)

    /* Act */
    const newTodo = {
      body: "updated example text",
      id: todoId,
    }
    editTodos(newTodo)

    /* Assert */
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(newTodo.body)
  })

  it("Should fail to edit a non-existing todo note and create a new one instead in localStorage", () => {
    /* Arrange */
    const todo = {
      body: "",
      id: Math.random(),
    }

    /* Act */
    editTodos(todo)

    /* Assert */
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(todo.body)
  })
})
