import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import "./selectComponent.scss"
const SelectComponent = ({ options, update }) => {
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
  update: PropTypes.func.isRequired,
}
export default SelectComponent
