import React from "react"
import PropTypes from "prop-types"
import "./selectDk.scss"

/**
 *
 * @param {*} props all the props for select component
 * @returns customisable select component
 */

const SelectDk = (props) => {
  const toggle = () => {
    props.open ? props.setOpen(false) : props.setOpen(true)
  }

  return (
    <div
      role="listbox"
      style={props.listBoxStyle}
      id={props.id}
      className="selectDk"
      onClick={toggle}
    >
      <span className="children">{props.visibleValue}</span>

      <div
        className={!props.open ? "optionsContainer" : "open"}
        style={props.optionsContainerStyle}
      >
        {props.datas.map((data, index) => {
          return (
            <div
              role="option"
              aria-selected
              onClick={(toggle, () => props.update(data))}
              onMouseEnter={(e) => {
                if (props.hoverOptionsStyle) {
                  e.target.style.backgroundColor =
                    props.hoverOptionsStyle.backgroundColor
                  e.target.style.color = props.hoverOptionsStyle.color
                } else {
                  return
                }
              }}
              onMouseLeave={(e) => {
                if (props.optionsStyle) {
                  e.target.style.backgroundColor =
                    props.optionsStyle.backgroundColor
                  e.target.style.color = props.optionsStyle.color
                } else {
                  return
                }
              }}
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
        className={!props.open ? "arrowUp" : "arrowDown"}
      >
        ^
      </span>
    </div>
  )
}

SelectDk.propTypes = {
  listBoxStyle: PropTypes.object,
  id: PropTypes.string,
  visibleValue: PropTypes.string,
  datas: PropTypes.array,
  optionsContainerStyle: PropTypes.object,
  update: PropTypes.func.isRequired,
  optionsStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
  hoverOptionsStyle: PropTypes.object,
  optionStyle: PropTypes.object,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
}

export default SelectDk
