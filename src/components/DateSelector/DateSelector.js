import React, { useState } from "react"
import "./dateSelector.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types"

const DateSelector = ({ id, updateBirth, updateStart }) => {
  const [selectedDate, setselectedDate] = useState(null)
  return (
    <div className="datePickerContainer">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setselectedDate(date)
          id === "birth"
            ? updateBirth(date.toLocaleDateString())
            : updateStart(date.toLocaleDateString())
        }}
        className="input"
        id={id}
        value={selectedDate}
        maxDate={new Date()}
        isClearable
        required
        dateFormat={"dd/MM/yyyy"}
      />
    </div>
  )
}
DateSelector.propTypes = {
  id: PropTypes.string.isRequired,
  updateBirth: PropTypes.func.isRequired,
  updateStart: PropTypes.func.isRequired,
}
export default DateSelector
