import { deleteTodo, editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should remove a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })

  const todoId = Math.random()

  it("Should remove a todo note", () => {
    /* Arrange */
    const todo = {
      body: "example text",
      id: todoId,
    }
    editTodos(todo)

    /* Act */
    deleteTodo(todoId)

    /* Assert */
    const savedTodos = getTodos()
    expect(savedTodos.length).toBe(0)
  })
})
