import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
import "./authModal.scss"
import { signInAuth } from "../../utils/apiDbFiresbase"
// import { log } from "../../features/employee"

const AuthModal = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const logged = async (e) => {
    e.preventDefault()
    const auth = await signInAuth("test@test.com", "password")
    if (auth.accessToken) {
      navigate("/CreateEmployee")
      setErrorMessage("")
    } else {
      setErrorMessage(auth)
    }
  }

  return (
    <div className="authModal">
      <form onSubmit={logged}>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="userName">Password</label>
        <input type="password" name="userName" id="userName" />
        <span className="error">{errorMessage}</span>
        <input type="submit" />
      </form>
    </div>
  )
}

export default AuthModal
