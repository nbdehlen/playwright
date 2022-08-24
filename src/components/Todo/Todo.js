import React, { useEffect, useState } from "react"
import { getTodos, editTodos, deleteTodo } from "./utils"

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState()

  const handleEditTodo = (todo) => {
    setEditTodo(todo)
  }

  useEffect(() => {
    setTodos(getTodos())
  }, [])

  const onChangeTodoInput = (e) => {
    setEditTodo((todo) => ({
      ...todo,
      body: e.target.value,
      id: todo?.id ?? Math.random(),
    }))
  }
  const onClickSaveTodo = () => {
    const updatedTodos = editTodos(editTodo)
    setTodos(updatedTodos)
    setEditTodo(null)
  }

  const onClickDeleteTodo = (todo) => {
    const updatedTodos = deleteTodo(todo)
    setTodos(updatedTodos)
    setEditTodo(null)
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      id="todo-container"
    >
      <h2>Todo:</h2>
      <input
        onChange={onChangeTodoInput}
        value={editTodo?.body || ""}
        style={{
          height: "100px",
          backgroundColor: "rgb(160,126,72)",
          borderRadius: 8,
          color: "#fafafa",
          fontSize: 16,
        }}
        data-test-id="todo-list-input"
      />
      <button
        style={{
          padding: 4,
          marginTop: 12,
          marginBottom: 12,
          height: 32,
          borderWidth: 0,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          borderRadius: 8,
        }}
        data-test-id="todo-list-submit"
        onClick={onClickSaveTodo}
      >
        Save
      </button>
      <div style={{ backgroundColor: "#555" }} data-test-id="todo-list">
        {todos &&
          todos.map((todo, i) => (
            <div key={todo.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ maxWidth: 300 }}
                  data-test-id={`todo-item-${i}-body`}
                >
                  {todo?.body}
                </div>
                <div>
                  <button
                    style={{
                      borderWidth: 0,
                      padding: 6,
                      height: 28,
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "rgb(81,186,0)",
                      borderRadius: 8,
                      marginRight: 8,
                    }}
                    data-test-id={`todo-item-${i}-edit`}
                    onClick={() => handleEditTodo(todo)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      borderWidth: 0,
                      padding: 6,
                      height: 28,
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "red",
                      borderRadius: 8,
                    }}
                    data-test-id={`todo-item-${i}-remove`}
                    onClick={() => onClickDeleteTodo(todo)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Todo
