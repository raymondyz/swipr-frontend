import { useState } from "react"
import { Pages } from "../constants/pages"
import { validateLogin } from "../utils/validation"
import { fetchUserByEmail } from "../utils/user"


function LoginPage({ setPage, auth: {user, setUser} }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault()

    // Validate login
    if (!validateLogin(email, password)) {
      console.log("Login failed")
      setError("The email or password you entered is incorrect!")
      return
    }

    // Login successful
    setUser(fetchUserByEmail(email))
    console.log("Login successful")
    setPage(Pages.HOME)
  }

  return (
    <>
      <h1>Login to Start Swiping!</h1>
      
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <p>{error}</p>

      <p>Don't have an account? <a onClick={() => setPage(Pages.SIGNUP)}>Create Account</a></p>
    </>
  )
}

export default LoginPage