import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { states } from "../../mocks/states"
import { addEmployee } from "../../features/employee"
import DateSelector from "../DateSelector/DateSelector.js"
import SelectComponent from "../Select/SelectComponent.js"
import PropTypes from "prop-types"
import { departments } from "../../mocks/departments"
import { employeesCollectionRef } from "../../utils/firebase.config"
import { addDoc } from "firebase/firestore"
import "./form.scss"
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

  const createUser = async () => {
    await addDoc(employeesCollectionRef, {
      firstName,
      lastName,
      birth,
      start,
      street,
      city,
      state,
      zip,
      dept,
    })
  }

  /**
   *update birth date when chosen
   * @param {object} date birthday date
   *
   */
  const updateBirth = (date) => {
    setBirth(date)
  }

  /**
   *update start date when chosen
   * @param {object} date start date
   */
  const updateStart = (date) => {
    setStart(date)
  }

  /**
   * update state when chosen
   * @param {string} state chosen state
   */
  const updateState = (state) => {
    setState(state)
  }

  /**
   * update department when chosen
   * @param {string} department
   */
  const updateDepartment = (department) => {
    setDept(department)
  }

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

  const dispatch = useDispatch()

  /**
   * saveEmployee for add in current employees
   * @param {event} e
   * @constant {object} employee employee informations
   */
  const saveEmployee = (e) => {
    e.preventDefault()

    // dispatch(
    //   addEmployee({
    //     firstName: firstName,
    //     lastName: lastName,
    //     birth: birth,
    //     start: start,
    //     street: street,
    //     city: city,
    //     state: state,
    //     zip: zip,
    //     dept: dept,
    //   })
    // )
    createUser()
    //modal de confirmation
    toggleModal()
    fieldReset()
    setResetValue(true)
  }

  return (
    <div>
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
          updateBirth={updateBirth}
          resetValue={resetValue}
          required
        />
        <label htmlFor="start">Start Date</label>

        <DateSelector
          id="start"
          updateStart={updateStart}
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
            onChange={(e) => setStreet(e.target.value.trim())}
            required
          />
          <label htmlFor="city">City</label>
          <input
            className="input"
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value.trim())}
            required
          />
          <label htmlFor="state">State</label>

          <SelectComponent
            id="state"
            options={states.map((el) => ({
              value: el.abbreviation,
              label: el.name,
            }))}
            updateState={updateState}
            required
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

        <SelectComponent
          id="departement"
          options={optionsDept}
          updateDepartment={updateDepartment}
        />
        <input className="saveBtn" type="submit" value="Save" />
      </form>
    </div>
  )
}
Form.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}

export default Form
