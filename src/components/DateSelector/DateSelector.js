import React, { useState } from "react"
import "./dateSelector.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types"

const DateSelector = (props) => {
  const [selectedDate, setselectedDate] = useState(null)
  console.log(typeof selectedDate)
  return (
    <div className="datePickerContainer">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setselectedDate(date)
          props.id === "birth"
            ? props.updateBirth(date.toLocaleDateString())
            : props.updateStart(date.toLocaleDateString())
        }}
        className="input"
        id={props.id}
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
  selectedDate: PropTypes.object.isRequired,
}
export default DateSelector
