import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import "./selectComponent.scss"
const SelectComponent = ({ options, id, updateDepartment, updateState }) => {
  return (
    <Select
      options={options}
      placeholder={options[0].label}
      className="select"
      value={options.value}
      onChange={(value) =>
        id === "state"
          ? updateState(value.value)
          : updateDepartment(value.value)
      }
    />
  )
}

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  updateDepartment: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
}
export default SelectComponent
