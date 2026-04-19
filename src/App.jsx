import { useState } from "react"
import "./App.css"
import LoginPage from "./pages/LoginPage"
import RegiserPage from "./pages/SignupPage"
import HomePage from "./pages/HomePage"
import { Pages } from "./constants/pages"

function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState(Pages.LOGIN)

  return (
    <>
      <p>[DEBUG] Logged in as: {user?.email}</p>
      <nav>
        <button onClick={() => setPage(Pages.LOGIN)}>Login Page</button>
        <button onClick={() => setPage(Pages.SIGNUP)}>Signup Page</button>
        <button onClick={() => setPage(Pages.HOME)}>Home Page</button>
      </nav>

      {page === Pages.LOGIN && <LoginPage setPage={setPage} auth={{ user, setUser }} />}
      {page === Pages.SIGNUP && <RegiserPage setPage={setPage} auth={{ user, setUser }} />}
      {page === Pages.HOME && <HomePage setPage={setPage} auth={{ user, setUser }} />}
    </>
  )
}

export default App
