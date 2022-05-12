import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import AuthModal from "../../components/AuthModal/AuthModal"
import { logIn } from "../../features/employee"
import "./home.scss"

const Home = () => {
  const dispatch = useDispatch()
  const adminLoggedIn = useSelector((state) => state.employees.adminLoggedIn)
  // if admin loggin and not logout accessToken is in the localStorage
  const adminAccessToken = localStorage.getItem("adminAccessToken")
  // check after all refresh or reco if the token is present
  useEffect(() => {
    adminAccessToken && dispatch(logIn())
  }, [])
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
