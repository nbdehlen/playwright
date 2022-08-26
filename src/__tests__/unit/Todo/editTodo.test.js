import { editTodos, getTodos } from "../../../components/Todo/utils"

describe("It should edit a todo in localStorage under key 'todos'", () => {
  beforeEach(() => {
    // clear storage
    localStorage.removeItem("todos")
  })
  const todoId = Math.random()
  it("Should edit a todo note", () => {
    const todo = {
      body: "example text",
      id: todoId,
    }
    editTodos(todo)

    const newTodo = {
      body: "updated example text",
      id: todoId,
    }
    editTodos(newTodo)

    const savedTodos = getTodos()
    expect(savedTodos[0].body).toEqual(newTodo.body)
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
