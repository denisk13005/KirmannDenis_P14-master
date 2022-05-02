import React from "react"
import "./selectDk.scss"

const SelectDk = (props) => {
  console.log(props.datas)
  return (
    <select
      style={props.selectStyle}
      id={props.id}
      className="selectDk"
      onChange={(e) => props.setValue(e.target.value)}
    >
      {props.datas &&
        props.datas.map((data, index) => {
          return (
            <option value={data.value} style={props.optionStyle} key={index}>
              {data.label}
            </option>
          )
        })}
    </select>
  )
}

export default SelectDk
