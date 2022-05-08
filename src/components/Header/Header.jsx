import React from "react"
import { NavLink } from "react-router-dom"
import "./header.scss"

const Header = () => {
  return (
    <header className="homeHeader">
      <NavLink className="home" to="/">
        hrNet
      </NavLink>
      <h2>
        <i className="fa fa-user-circle"></i> Admin
      </h2>
    </header>
  )
}

export default Header
