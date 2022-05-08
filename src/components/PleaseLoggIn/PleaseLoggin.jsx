import React from "react"
import { NavLink } from "react-router-dom"
import "./pleaseLoggIn.scss"

const PleaseLoggin = () => {
  return (
    <>
      <h3
        className="pleaseTitle"
        style={{ color: "#4d5198", fontSize: "24px" }}
      >
        ⚠ You are not loggIn ⚠
      </h3>
      <NavLink to={"/"}>→Please LogIn←</NavLink>
    </>
  )
}

export default PleaseLoggin
