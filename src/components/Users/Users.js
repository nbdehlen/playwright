import axios from "axios"
import React, { useEffect, useState } from "react"
import { formatUserName } from "../../utils"

const Users = () => {
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      setLoadingUsers(false)
      setUsers(response.data)
    }
    getUsers()
  }, [])

  return (
    <div>
      <h2>Users:</h2>
      <div>
        {!loadingUsers && (
          <div data-testid="actual-users">
            {users.map((user) => (
              <div key={user.name}>
                <p>
                  {user.name}
                  {" - "}
                  <i>
                    <a
                      style={{ fontSize: 14, color: "white" }}
                      href="www.google.se"
                    >
                      {formatUserName(user.username)}
                    </a>
                  </i>
                </p>
              </div>
            ))}
          </div>
        )}
        {loadingUsers && <div data-testid="loading-users">Loading...</div>}
      </div>
    </div>
  )
}

export default Users
