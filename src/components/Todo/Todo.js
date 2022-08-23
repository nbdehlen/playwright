import React, { useEffect, useState } from "react"
import { getTodos, editTodos } from "./utils"

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState()

  const handleEditTodo = (i) => {
    const todos = getTodos()
    console.log({ todos })
    setEditTodo(todos[i])
  }

  useEffect(() => {
    setTodos(getTodos())
  }, [])

  const onChangeTodoInput = (e) => {
    setEditTodo((todo) => ({
      ...todo,
      body: e.target.value,
      order: todo?.order ?? todos?.length ?? 0,
    }))
  }
  const onClickSaveTodo = () => {
    const newTodos = editTodos(editTodo)
    setTodos(newTodos)
    setEditTodo(null)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        onClick={onClickSaveTodo}
      >
        Save
      </button>
      <div style={{ backgroundColor: "#555" }}>
        {todos &&
          todos.map((todo, i) => (
            <div key={todo.order}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ maxWidth: 300 }}>{todo?.body}</div>
                <button
                  style={{
                    borderWidth: 0,
                    padding: 6,
                    height: 28,
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "rgb(81,186,0)",
                    borderRadius: 8,
                  }}
                  onClick={() => handleEditTodo(i)}
                >
                  Edit
                </button>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Todo
