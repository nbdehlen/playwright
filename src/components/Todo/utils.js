export const getTodos = () => {
  const todos = localStorage.getItem("todos")
  console.log(JSON.stringify(todos, null, 2))
  return todos?.length > 0 ? JSON.parse(todos) : []
}
export const createTodo = (todo) => {
  console.log(JSON.stringify([...getTodos(), todo]))
  const newTodos = [...getTodos(), todo]
  localStorage.setItem("todos", JSON.stringify(newTodos))
  return newTodos
}
export const deleteTodo = (todoIndex) => {
  const oldTodos = getTodos()
  const newTodos = [
    ...oldTodos.slice(0, todoIndex),
    ...oldTodos.slice(todoIndex + 1, oldTodos.length),
  ]
  localStorage.setItem("todos", JSON.stringify(newTodos))
  return newTodos
}
export const editTodos = (todo) => {
  const oldTodos = getTodos()
  const newTodos = [
    ...oldTodos.slice(0, todo.order),
    todo,
    ...oldTodos.slice(todo.order + 1, oldTodos.length),
  ]
  console.log({ newTodos })
  localStorage.setItem("todos", JSON.stringify(newTodos))
  return newTodos
}
