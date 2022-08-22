import logo from "./logo.svg"
import "./App.css"
import WindowWidth from "./components/WindowWidth/WindowWidth"
import { useEffect, useState } from "react"
import axios from "axios"
import { formatUserName } from "./utils"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let mounted = true

    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      if (mounted) {
        setUsers(response.data)
        console.log(response.data)
      }
    }
    getUsers()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Users:</h1>
      <div>
        {users.map((user) => (
          <div>{`${user.name} ${formatUserName(user.username)}`}</div>
        ))}
      </div>
      <div id="component-wrapper">
        <WindowWidth />
      </div>
    </div>
  )
}

export default App
