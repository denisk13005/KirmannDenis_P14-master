import React from "react"
import { NavLink } from "react-router-dom"
import Table from "../../components/Table/Table"
import "./employeeList.scss"

const EmployeeList = () => {
  return (
    <section className="employeeListContainer">
      <h1>Current Employees</h1>
      <Table />
      <div className="redirectFooter">
        <NavLink to={"/"}>---- Home ----</NavLink>
        <NavLink to={"/createEmployee"}>---- Create Employee ----</NavLink>
      </div>
    </section>
  )
}

export default EmployeeList
