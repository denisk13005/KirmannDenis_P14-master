import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/img/favicon.png"
import "./notFound.scss"

const NotFound = () => {
  return (
    <section className="notFound">
      <img src={logo} alt="Logo" />
      <h3>Wealth Health </h3>
      <p> ---Page Not Found---</p>
      <NavLink to="/">---Go Login---</NavLink>
    </section>
  )
}

export default NotFound
