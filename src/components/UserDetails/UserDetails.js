import React from "react"
import { useParams } from "react-router-dom"

const UserDetails = () => {
  let params = useParams()
  return <div>Anything really, userId {params.userId}</div>
}

export default UserDetails
