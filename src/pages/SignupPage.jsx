import { useState } from "react"
import { Pages } from "../constants/pages"
import { validateSignupEmail, validateSignupPassword, passwordRequirements } from "../utils/validation"
import { registerUser } from "../utils/registration"
import { fetchUserByEmail } from "../utils/user"

function SignupPage({ setPage, auth: {user, setUser} }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")

  function handleSignup(e) {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError("Passwords don't match!")
      return
    }

    if (!validateSignupEmail(email)) {
      setError("Email address is not valid!")
      return
    }

    if (!validateSignupPassword(password)) {
      setError(passwordRequirements)
      return
    }

    // Try to register user
    if (!registerUser(email, password)) {
      setError("Failed to register, please report this bug!")
      return
    }

    // Register successful

    console.log("Signup successful")
    setUser(fetchUserByEmail(email))
    setPage(Pages.HOME)
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

      <p>{error}</p>

      <p>Already have an account? <a onClick={() => setPage(Pages.LOGIN)}>Login</a></p>
    </>
  )
}

export default SignupPage