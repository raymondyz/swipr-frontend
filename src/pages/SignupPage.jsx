import { useState } from "react"
import { Pages } from "../constants/pages"
import { validateSignupEmail, validateSignupPassword, passwordRequirements } from "../utils/authValidation"
import { registerUser } from "../utils/api/authApi"
import { fetchUserByEmail } from "../utils/api/userApi"

function SignupPage({ setPage, auth: {user, setUser} }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignup(e) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (password !== confirmPassword) {
      setError("Passwords don't match!")
      setIsLoading(false)
      return
    }

    if (!validateSignupEmail(email)) {
      setError("Email address is not valid!")
      setIsLoading(false)
      return
    }

    if (!validateSignupPassword(password)) {
      setError(passwordRequirements)
      setIsLoading(false)
      return
    }

    // Try to register user
    try {
      await registerUser(email, password)

      // Register successful
      setUser(await fetchUserByEmail(email))
      console.log("Signup successful")
      setPage(Pages.HOME)
    }
    catch (err) {
      setError(err.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <h1>Create an Account to Start Swiping!</h1>
      
      <form onSubmit={handleSignup}>
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
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          id="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>

      {isLoading && <p>Loading...</p>}
      <p>{error}</p>

      <p>Already have an account? <a onClick={() => setPage(Pages.LOGIN)}>Login</a></p>
    </>
  )
}

export default SignupPage