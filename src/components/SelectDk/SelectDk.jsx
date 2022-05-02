import React from "react"
import "./selectDk.scss"

const SelectDk = (props) => {
  console.log(props.datas)

  const openContainer = (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.childNodes[1].classList.add("open")
  }

  const closeContainer = (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.parentElement.classList.remove("open")
  }

  return (
    <div
      role="listbox"
      style={{
        backgroundColor: "blue",
        position: "relative",
        zIndex: 1,
        border: "1px solid pink",
      }}
      id={props.id}
      className="selectDk"
      onClick={openContainer}
    >
      parent
      <div
        className="optionsContainer"
        style={{
          backgroundColor: "yellow",
          border: "1px solid red",
          position: "absolute",
          top: 40,
          width: "100%",
          height: "auto",
          lineHeight: "200%",
          zIndex: 3,
        }}
      >
        {props.datas.map((data, index) => {
          return (
            <div
              onClick={closeContainer}
              value={data.value}
              style={props.optionStyle}
              key={index}
            >
              {data.label}
            </div>
          )
        })}
      </div>
      {/* <select
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
      </select> */}
    </div>
  )
}

export default SelectDk
