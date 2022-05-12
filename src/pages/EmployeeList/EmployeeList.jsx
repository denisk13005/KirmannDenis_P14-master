import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import PleaseLoggin from "../../components/PleaseLoggIn/PleaseLoggin"
import Table from "../../components/Table/Table"
import { logIn } from "../../features/employee"
import "./employeeList.scss"

const EmployeeList = () => {
  const dispatch = useDispatch()
  const adminLoggedIn = useSelector((state) => state.employees.adminLoggedIn)
  const adminAccessToken = localStorage.getItem("adminAccessToken")
  useEffect(() => {
    adminAccessToken && dispatch(logIn())
  }, [])
  return (
    <section className="employeeListContainer">
      {adminLoggedIn ? (
        <>
          <h1>Current Employees</h1>
          <Table />
          <div className="redirectFooter">
            <NavLink to={"/"}>---- Home ----</NavLink>
            <NavLink to={"/createEmployee"}>---- Create Employee ----</NavLink>
          </div>
        </>
      ) : (
        <PleaseLoggin />
      )}
    </section>
  )
}

export default EmployeeList
