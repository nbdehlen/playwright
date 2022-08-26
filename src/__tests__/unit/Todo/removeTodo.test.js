import { deleteTodo, editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should remove a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })
  const todoId = Math.random()
  it("Should remove a todo note", () => {
    const todo = {
      body: "example text",
      id: todoId,
    }
    editTodos(todo)

    deleteTodo(todoId)

    const savedTodos = getTodos()
    expect(savedTodos.length).toBe(0)
  })

  it("Should fail to edit a non-existing todo note and create a new one instead", () => {
    const todo = {
      body: "",
      id: Math.random(),
    }
    editTodos(todo)
    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(todo.body)
  })
})
