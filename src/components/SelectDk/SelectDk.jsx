import React, { useState } from "react"
import PropTypes from "prop-types"
import "./selectDk.scss"

/* A function that returns a div. */

const SelectDk = (props) => {
  console.log(typeof props.datas)
  const [open, setopen] = useState(false)

  const toggle = () => {
    open ? setopen(false) : setopen(true)
  }

  return (
    <div
      role="listbox"
      style={props.listBoxStyle}
      id={props.id}
      className="selectDk"
      onClick={toggle}
    >
      <span className="children">{props.child}</span>

      <div
        className={!open ? "optionsContainer" : "open"}
        style={props.optionsContainerStyle}
      >
        {props.datas.map((data, index) => {
          return (
            <div
              role="option"
              aria-selected
              onClick={(toggle, () => props.update(data))}
              style={props.optionsStyle}
              key={index}
              className="options"
              id="options"
            >
              {data.label}
            </div>
          )
        })}
      </div>

      <span className={!open ? "arrowUp" : "arrowDown"}>^</span>
    </div>
  )
}

SelectDk.propTypes = {
  listBoxStyle: PropTypes.object,
  id: PropTypes.string,
  child: PropTypes.string,
  datas: PropTypes.array,
  optionsContainerStyle: PropTypes.object,
  update: PropTypes.func.isRequired,
  optionsStyle: PropTypes.object,
}

export default SelectDk
