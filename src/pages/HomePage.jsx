import { useState } from "react"
import { Pages } from "../constants/pages"
import { validateLogin } from "../utils/api/authApi"
import { getUserByEmail } from "../utils/api/userApi"

function HomePage({ setPage, auth: {user, setUser}  }) {
  const [name, setName] = useState("")
  if (!user){
    return (<h2>You are not currently logged in yet...</h2>)
  }
  return (<h2>Welcome {user.name}!</h2>)
}

export default HomePage