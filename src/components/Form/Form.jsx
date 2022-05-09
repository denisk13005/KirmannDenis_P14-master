import React, { useState } from "react"
import {} from "dk_select_package"
import { states } from "../../mocks/states"
import DateSelector from "../DateSelector/DateSelector.js"
import PropTypes from "prop-types"
import { departments } from "../../mocks/departments"
import { createEmployee } from "../../utils/apiDbFiresbase"
// import { SelectDk } from "dk_select_package"
import SelectDk from "../SelectDk/SelectDk"

import "./form.scss"

//option for selectComponent
const optionsDept = departments.map((el) => ({
  value: el,
  label: el,
}))

/**
 * Form component
 * @returns {ReactComponentElement} form for add employee
 */
const Form = ({ toggleModal }) => {
  //local state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birth, setBirth] = useState("")
  const [start, setStart] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("AL")
  const [zip, setZip] = useState("")
  const [dept, setDept] = useState("Sales")
  const [resetValue, setResetValue] = useState(false)

  // ----------------------essai du composant select avec div--------------------

  const [stateString, setStateString] = useState("Alabama")

  console.log(state, dept)

  //employee to add in db
  let employee = {
    firstName,
    lastName,
    birth,
    start,
    street,
    city,
    state,
    zip,
    dept,
  }

  /**
   *update birth date when chosen
   * @param {string} date birthday date
   *
   */
  const updateBirth = (date) => {
    setBirth(date)
  }

  /**
   *update start date when chosen
   * @param {string} date start date
   */
  const updateStart = (date) => {
    setStart(date)
  }

  /**
   * update state and childrenState
   * @param {object} data object return
   */
  const updateState = (data) => {
    setState(data.value)
    setStateString(data.label)
  }

  /**
   * update department when chosen
   * @param {string} department
   */
  const updateDepartment = (department) => {
    setDept(department.label)
  }

  /**
   * This function resets the state of the form fields to empty strings.
   */
  const fieldReset = () => {
    setFirstName("")
    setLastName("")
    setBirth(" ")
    setStart(" ")
    setStreet("")
    setCity("")
    setState("")
    setZip("")
    setDept("")
  }

  // const dispatch = useDispatch()

  /**
   * saveEmployee for add in current employees
   * @param {event} e
   * @constant {object} employee employee informations
   */
  const saveEmployee = (e) => {
    e.preventDefault()
    createEmployee(employee)
    toggleModal()
    fieldReset()
    setResetValue(true)
  }

  //SelectDk props

  const [stateOpen, setStateOpen] = useState(false)
  const [deptOpen, setDeptOpen] = useState(false)

  return (
    <div onClick={() => console.log("click")}>
      <form onSubmit={saveEmployee}>
        <label htmlFor="firstName">First Name</label>
        <input
          className="input"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
          required
          autoFocus
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          className="input"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value.trim())}
          required
        />
        <label htmlFor="birth">Date Of Birth</label>

        <DateSelector
          id="birth"
          update={updateBirth}
          resetValue={resetValue}
          required
        />
        <label htmlFor="start">Start Date</label>

        <DateSelector
          id="start"
          update={updateStart}
          resetValue={resetValue}
          required
        />

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            className="input"
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <label htmlFor="city">City</label>
          <input
            className="input"
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="state">State</label>

          <SelectDk
            datas={states.map((el) => ({
              value: el.abbreviation,
              label: el.name,
            }))}
            update={updateState}
            visibleValue={stateString}
            open={stateOpen}
            setOpen={setStateOpen}
            // listBoxStyle={{ color: "white", background: "red" }}
            // optionsContainerStyle={{
            //   scrollbarColor: " darkBlue pink",
            //   backgroundColor: "black",
            // }}
            // optionsStyle={{
            //   backgroundColor: "white",
            //   color: "orange",
            // }}
            // hoverOptionsStyle={{
            //   backgroundColor: "orange",
            //   color: "white",
            // }}
          />

          <label htmlFor="zip">Zip Code</label>
          <input
            className="input"
            type="number"
            name="zip"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value.trim())}
            required
          />
        </fieldset>
        <label htmlFor="department">Department</label>

        <SelectDk
          datas={optionsDept}
          visibleValue={dept}
          update={updateDepartment}
          open={deptOpen}
          setOpen={setDeptOpen}
        />

        <input
          aria-label="save"
          className="saveBtn"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  )
}

Form.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}

export default Form
