import React from "react"
import { NavLink } from "react-router-dom"
import "./home.scss"

const Home = () => {
  return (
    <main id="homeContainer">
      <section className="homeSection">
        <NavLink to={"/employeeList"}>View Current Employees </NavLink>
        <NavLink to={"/createEmployee"}>Create New Employee</NavLink>
      </section>
    </main>
  )
}

export default Home
