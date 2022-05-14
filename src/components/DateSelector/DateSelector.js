import React, { useEffect, useState } from "react"
import "./dateSelector.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import PropTypes from "prop-types"

const DateSelector = ({ id, update, resetValue, setResetValue }) => {
  const [selectedDate, setselectedDate] = useState(null)

  /**
   * this use effect reset the field data afet submit
   */
  useEffect(() => {
    resetValue && setselectedDate(null)
    setResetValue(false)
  }, [resetValue])

  return (
    <div className="datePickerContainer">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setselectedDate(date)
          date && update(new Date(date).toISOString())
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
  setResetValue: PropTypes.func,
}
export default DateSelector
//
