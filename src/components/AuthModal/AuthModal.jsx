import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./authModal.scss"
import { signInAuth } from "../../utils/apiDbFiresbase"
import { logIn } from "../../features/employee"

const AuthModal = () => {
  const adminLoggedIn = useSelector((state) => state.employees.adminLoggedIn)
  const [userName, setUserName] = useState("test@test.com")
  const [password, setPassword] = useState("password")
  const [errorMessage, setErrorMessage] = useState("")
  const dispatch = useDispatch()
  /**
   * prevent the refresh and launch getAuth function
   * @param {event} e
   */
  const logged = (e) => {
    e.preventDefault()
    getAuth(userName, password)
  }

  /**
   * Ckeck the username and password in the firebase signInAuth api,
   * stock the response token in local storage and dispatch the redux logIn action  *
   * @param {string} userName
   * @param {string} password
   * @return accessToken connection if request ok or error if not
   */
  const getAuth = async (userName, password) => {
    const auth = await signInAuth(userName, password)
    if (auth.accessToken) {
      localStorage.setItem("adminAccessToken", auth.accessToken)
      dispatch(logIn())
      setErrorMessage("")
    } else {
      setErrorMessage(auth.split("/")[1])
    }
  }

  //unmount when loggedIn
  useEffect(() => {
    return () => null
  }, [adminLoggedIn])

  return (
    <div className="authModal">
      <form className="authForm" onSubmit={logged}>
        <h2 id="loginTitle">LogIn</h2>
        <label className="authLabel" htmlFor="userName">
          Username
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value.trim())}
          autoFocus
        />
        <label className="authLabel" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <span className="errorMessage">{errorMessage}</span>
        <input className="submitBtn" type="submit" value="LogIn" />
      </form>
    </div>
  )
}

export default AuthModal
