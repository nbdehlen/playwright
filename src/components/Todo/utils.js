export const getTodos = () => {
  const todos = localStorage.getItem("todos")
  return todos?.length > 0 ? JSON.parse(todos) : []
}
export const deleteTodo = (todoId) => {
  const oldTodos = getTodos()
  const todoIndex = oldTodos.findIndex((obj) => obj.id === todoId)
  const updatedTodos = [
    ...oldTodos.slice(0, todoIndex),
    ...oldTodos.slice(todoIndex + 1, oldTodos.length),
  ]

  localStorage.setItem("todos", JSON.stringify(updatedTodos))
  return updatedTodos
}

export const editTodos = (todo) => {
  const oldTodos = getTodos()
  const todoIndex = oldTodos.findIndex((obj) => {
    return obj.id === todo.id
  })
  let newTodos = []

  if (todoIndex >= 0) {
    newTodos = [
      ...oldTodos.slice(0, todoIndex),
      todo,
      ...oldTodos.slice(todoIndex + 1, oldTodos.length),
    ]
  } else {
    newTodos = [...oldTodos, todo]
  }

  localStorage.setItem("todos", JSON.stringify(newTodos))
  return newTodos
}
