import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Form from "../../components/Form/Form"
// import Modal from "../../components/Modal/Modal"
import { Modal } from "dk_modale_package"

import "./createEmployee.scss"

const CreateEmployee = () => {
  let [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
  }
  const headerStyle = {
    background: "linear-gradient(165deg,#4d5198, #daf2dc)",
    fontSize: "48px",
    color: "white",
  }
  const modalContainerStyle = {
    background:
      "linear-gradient(165deg,#4d5198 0%,#daf2dc 40%,white ,#daf2dc 60%,#4d5198 100%)",
    fontSize: "32px",
    color: "#4d5198",
  }
  const backgroundModalContainerStyle = {
    background:
      "linear-gradient(165deg,rgba(27,27,27,0.9) 0%,rgba(27,27,27,0.5) 45%, rgba(255,255,255,0.1) 50%,rgba(27,27,27,0.5) 55%,rgba(27,27,27,0.9) 100%)",
  }
  const footerStyle = {
    background: "linear-gradient(165deg,#daf2dc, #4d5198)",
    fontSize: "24px",
    color: "white",
  }
  const modaleMsg = "Employee Created"
  const headerMsg = "HrNet Saved"
  const footerMsg = "Thanks"
  return (
    <main id="createEmployeeContainer">
      <NavLink id="viewCurrentEmployee" to={"/employeeList"}>
        View Current Employees
      </NavLink>
      <h2 id="title">Create Employee</h2>
      <Modal
        status={modalIsOpen}
        modalMessage={modaleMsg}
        toggleModal={toggleModal}
        headerStyle={headerStyle}
        headerMsg={headerMsg}
        footerStyle={footerStyle}
        footerMsg={footerMsg}
        modalContainerStyle={modalContainerStyle}
        backgroundModalContainerStyle={backgroundModalContainerStyle}
      />
      <Form toggleModal={toggleModal} />
    </main>
  )
}

export default CreateEmployee
