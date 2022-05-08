import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import logoutPng from "../../assets/img/logout.png"
import "./header.scss"

const Header = () => {
  const adminLoggedIn = useSelector((state) => state.employees.adminLoggedIn)
  const dispatch = useDispatch()
  return (
    <header className="homeHeader">
      <NavLink className="home" to="/">
        hrNet
      </NavLink>
      {adminLoggedIn ? (
        <div className="adminAndLogout">
          <h2>
            <i className="fa fa-user-circle"></i> Admin
          </h2>
          <NavLink
            className="logoutNavlink"
            to="/"
            onClick={() => dispatch(logout())}
          >
            <img src={logoutPng} />
            <h2>Logout</h2>
          </NavLink>
        </div>
      ) : null}
    </header>
  )
}

export default Header
