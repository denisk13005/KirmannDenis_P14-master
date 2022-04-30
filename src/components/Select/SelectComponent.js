import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import "./selectComponent.scss"
const SelectComponent = ({ options, id, update }) => {
  return (
    <Select
      options={options}
      placeholder={options[0].label}
      className="select"
      value={options.value}
      onChange={(e) => update(e.value)}
    />
  )
}

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  updateDepartment: PropTypes.func,
  updateState: PropTypes.func,
}
export default SelectComponent
