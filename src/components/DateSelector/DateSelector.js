import React, { useEffect, useState } from "react"
import "./dateSelector.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types"

const DateSelector = ({ id, update, resetValue }) => {
  const [selectedDate, setselectedDate] = useState(null)
  useEffect(() => {
    resetValue && setselectedDate(null)
  }, [resetValue])

  return (
    <div className="datePickerContainer">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setselectedDate(date)
          date && update(date.toDateString())
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
  update: PropTypes.func,
  resetValue: PropTypes.bool,
}
export default DateSelector
//
