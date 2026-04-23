import { useState } from "react"
import { Pages } from "../constants/pages"
import { validateLogin } from "../utils/api/authApi"
import { getUserByEmail } from "../utils/api/userApi"


function LoginPage({ setPage, auth: {user, setUser} }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validate login
    try {
      await validateLogin(email, password)
      
      // Login successful
      const fetchedUser = await getUserByEmail(email)
      setUser(fetchedUser)

      // Check if user is verified yet
      if (fetchedUser.is_verified) {
        setPage(Pages.HOME)
      }
      else {
        setPage(Pages.SIGNUP)
      }
      console.log("Login successful")
    }
    catch (err) {
      console.log("Login failed")
      setError(err.message)
    }
    finally {
      setIsLoading(false)
    }
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

      {isLoading && <p>Loading...</p>}
      <p>{error}</p>

      <p>Don't have an account? <a onClick={() => setPage(Pages.SIGNUP)}>Create Account</a></p>
    </>
  )
}

export default LoginPage