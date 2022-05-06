import React from "react"
import { useDispatch } from "react-redux"
import "./authModal.scss"
import { log } from "../../features/employee"

const AuthModal = () => {
  const dispatch = useDispatch()
  const logged = (e) => {
    e.preventDefault()
    dispatch(log())
  }

  return (
    <div className="authModal">
      <form onSubmit={logged}>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="userName">Password</label>
        <input type="password" name="userName" id="userName" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AuthModal
