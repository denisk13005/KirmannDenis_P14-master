import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import AuthModal from "../../components/AuthModal/AuthModal"
import "./home.scss"

const Home = () => {
  const adminLoggedIn = useSelector((state) => state.adminLoggedIn)
  return (
    <main id="homeContainer">
      {adminLoggedIn ? (
        <section className="homeSection">
          <NavLink to={"/employeeList"}>View Current Employees </NavLink>
          <NavLink to={"/createEmployee"}>Create New Employee</NavLink>
        </section>
      ) : (
        <AuthModal />
      )}
    </main>
  )
}

export default Home
