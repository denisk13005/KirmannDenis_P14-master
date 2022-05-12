import React from "react"
import PropTypes from "prop-types"
import "./globalFilter.scss"

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span id="searchContainer">
      <div className="search">
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </span>
  )
}

GlobalFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
}

export default GlobalFilter
