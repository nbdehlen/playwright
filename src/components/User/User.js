import React from "react"
import { Link } from "react-router-dom"
import { formatUserName } from "../../utils"

const User = ({ user }) => {
  return (
    <p>
      {user.name}
      {" - "}
      <i>
        <Link style={{ fontSize: 14, color: "white" }} to={`/users/${user.id}`}>
          {formatUserName(user.username)}
        </Link>
      </i>
    </p>
  )
}

export default User
