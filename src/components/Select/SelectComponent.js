import React from "react"
import Select from "react-select"
import "./selectComponent.scss"
export default function SelectComponent(props) {
  let { options, id, updateDepartment, updateState } = props
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
