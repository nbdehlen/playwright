import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 20 }}>
        <Link to="/" data-testid="home-link">
          Home
        </Link>
      </div>
      <div style={{ marginRight: 20 }}>
        <Link to="/users" data-testid="users-link">
          Users
        </Link>
      </div>
      <div style={{ marginRight: 20 }}>
        <Link to="/todo" data-testid="todo-link">
          Todo
        </Link>
      </div>
    </div>
  )
}

export default Nav
