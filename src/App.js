import WindowWidth from "./components/WindowWidth/WindowWidth"
import { useEffect, useState } from "react"
import axios from "axios"
import { formatUserName } from "./utils"
import Todo from "./components/Todo/Todo"

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
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2>Users:</h2>
        <div>
          {users.map((user) => (
            <div key={user.name}>{`${user.name} ${formatUserName(
              user.username
            )}`}</div>
          ))}
        </div>
      </div>

      <div id="component-wrapper" style={sectionStyle}>
        <h2>Window width:</h2>
        <WindowWidth />
      </div>

      <div style={sectionStyle}>
        <Todo />
      </div>
    </div>
  )
}

export default App

const sectionStyle = {
  minWidth: 360,
  backgroundColor: "#555",
  color: "#fafafa",
  padding: 16,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 16,
  borderColor: "rgba(180,180,180,0.8)",
  margin: 16,
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#555",
}
