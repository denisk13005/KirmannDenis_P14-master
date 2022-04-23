import React from "react"
import "./globalFilter.scss"

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span id="searchContainer">
      <div className="search">
        Search:{" "}
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: "9vw", height: "2vh" }}
        />
      </div>
    </span>
  )
}

export default GlobalFilter
