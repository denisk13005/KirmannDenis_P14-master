import React from "react"
import Select from "react-select"
import propTypes from "prop-types"
import "./selectComponent.scss"
export default function SelectComponent({
  options,
  id,
  updateDepartment,
  updateState,
}) {
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
  options: propTypes.array.isRequired,
  id: propTypes.string.isRequired,
  updateDepartment: propTypes.func.isRequired,
  updateState: propTypes.func.isRequired,
}
