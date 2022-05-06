import React, { useState } from "react"
import PropTypes from "prop-types"
import "./selectDk.scss"

/**
 *
 * @param {*} props all the props for select component
 * @returns customisable select component
 */

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

      <span
        style={props.arrowStyle}
        className={!open ? "arrowUp" : "arrowDown"}
      >
        ^
      </span>
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
  arrowStyle: PropTypes.object,
}

export default SelectDk
