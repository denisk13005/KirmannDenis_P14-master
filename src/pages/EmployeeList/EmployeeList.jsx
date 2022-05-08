import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import PleaseLoggin from "../../components/PleaseLoggIn/PleaseLoggin"
import Table from "../../components/Table/Table"
import "./employeeList.scss"

const EmployeeList = () => {
  const adminLoggedIn = useSelector((state) => state.employees.adminLoggedIn)
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
