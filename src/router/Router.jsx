import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee"
import EmployeeList from "../pages/EmployeeList/EmployeeList"
import Home from "../pages/Home/Home"

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateEmployee" element={<CreateEmployee />} />
        <Route path="/employeeList" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default routes
