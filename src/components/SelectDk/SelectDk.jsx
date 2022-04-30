import React from "react"
import "./selectDk.scss"

const SelectDk = (props) => {
  return (
    <select
      style={props.selectStyle}
      id={props.id}
      className="selectDk"
      value={props.datas.value}
      onChange={(e) => props.setValue(e.target.value)}
    >
      {props.datas &&
        props.datas.map((data, index) => {
          return (
            <option style={props.optionStyle} key={index}>
              {data.value}
            </option>
          )
        })}
    </select>
  )
}

export default SelectDk
