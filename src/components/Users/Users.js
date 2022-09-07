import axios from "axios"
import React, { useEffect, useState } from "react"
import User from "../User/User"

const Users = () => {
  const [users, setUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      setLoadingUsers(false)
      if (response?.data) {
        setUsers(response.data)
      }
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
              <User key={user.name} user={user} />
            ))}
          </div>
        )}
        {loadingUsers && <div data-testid="loading-users">Loading...</div>}
      </div>
    </div>
  )
}

export default Users
