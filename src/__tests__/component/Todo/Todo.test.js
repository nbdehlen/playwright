import { fireEvent, render, screen } from "@testing-library/react"
import Todo from "../../../components/Todo/Todo"
import { editTodos } from "../../../components/Todo/utils"

// black-box tests
beforeEach(() => {
  localStorage.removeItem("todos")
})

test("Render one todo item", async () => {
  const todo = {
    body: "example text for integration test",
    id: Math.random(),
  }
  editTodos(todo)
  render(<Todo />)

  const todoItemOneBody = screen.getByTestId("todo-item-0-body").innerHTML
  expect(todoItemOneBody).toBe(todo.body)
})

test("Create one todo item", async () => {
  const todoBody = "another example text for integration test"
  render(<Todo />)

  // Make sure container is empty
  const container = screen.getByTestId("todo-list")
  expect(container.childElementCount).toEqual(0)

  // Create one todo item
  const input = screen.getByTestId("todo-list-input")
  fireEvent.change(input, { target: { value: todoBody } })

  const submit = screen.getByTestId("todo-list-submit")
  fireEvent.click(submit)

  expect(container.childElementCount).toEqual(1)

  const todoItemOneBody = screen.getByTestId("todo-item-0-body").innerHTML
  expect(todoItemOneBody).toBe(todoBody)
})

test("Edit one todo item", async () => {
  const todo = {
    body: "example text for integration test",
    id: Math.random(),
  }
  editTodos(todo)

  const updatedTodoBody = "updated example text for integration test"
  render(<Todo />)

  // Select todo item to edit
  const editButton = screen.getByTestId("todo-item-0-edit")
  fireEvent.click(editButton)

  // Create one todo item
  const input = screen.getByTestId("todo-list-input")
  fireEvent.change(input, { target: { value: updatedTodoBody } })

  const submit = screen.getByTestId("todo-list-submit")
  fireEvent.click(submit)

  const todoItemOneBody = screen.getByTestId("todo-item-0-body").innerHTML
  expect(todoItemOneBody).toBe(updatedTodoBody)
})

test("Delete one todo item", async () => {
  const todo = {
    body: "Delete me please",
    id: Math.random(),
  }
  editTodos(todo)

  render(<Todo />)

  // Select todo item to edit
  const deleteButton = screen.getByTestId("todo-item-0-remove")
  fireEvent.click(deleteButton)

  // Make sure container is empty
  const container = screen.getByTestId("todo-list")
  expect(container.childElementCount).toEqual(0)
})
