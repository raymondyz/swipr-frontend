import { useState } from "react"
import { Pages } from "../constants/pages"
import { validateLogin } from "../utils/api/authApi"
import { getUserByEmail } from "../utils/api/userApi"

function HomePage({ setPage, auth: {user, setUser}  }) {
  const [name, setName] = useState("")

  if (!user){
    return (<h2>You are not currently logged in yet... (also it should be impossible to get to this page lul)</h2>)
  }
  return (
    <>
    <div className="masterHomePage">
      <div className="sideNavBar">
        <img src="src/assets/images/swiprLogo.png" alt="Logo" className="Logo"></img>
        <img src="src/assets/images/animepfp.jpg" alt="PFP" className="PFP"></img>
        <p>[DEBUG] Logged in as: {user?.email}</p>
        <button className= "bigAhhButton" type="submit">Profile</button>
        <button className= "bigAhhButton" type="submit">Settings</button>
        
        <button className= "bigAhhButton" type="submit">Home</button>
        <button className= "bigAhhButton" type="submit">Dining Halls</button>
        <button className= "bigAhhButton" type="submit">Groups</button>
        <button className= "bigAhhButton" type="submit">Messages</button>
      </div>
      <div className="homePageContent">
        <h2>Welcome {user.name}!</h2> 
      </div>
    </div>
    </>
)
}

export default HomePage