import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDbEmployees } from "../../features/employee"
import Loader from "../Loader/Loader"
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table"

import columns from "../Columns"
import "./table.scss"
import GlobalFilter from "../GlobalFilter/GlobalFilter"
const dataColumns = columns

/**
 *Table is a array of employee build whith react table package
 *@param {employees} array employees array
 *@param {columns} array colums title
 * @returns {React table} return a react table of employees
 */

function Table() {
  const employees = useSelector((state) => state.employees.informations)

  const dispatch = useDispatch()

  const getEmployees = async () => {
    dispatch(fetchDbEmployees())
  }

  useEffect(() => {
    getEmployees()
  }, [])

  const data = React.useMemo(() => employees, [employees]) // recalculate the memorized value only if employees has changed
  const columns = React.useMemo(() => dataColumns, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

  const { globalFilter, pageIndex, pageSize } = state

  const itemsOnPage = [1, 10, 25, 50, 100]

  return (
    <>
      <div className="tableTop">
        <div className="selectPageSize">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {itemsOnPage.map((items) => (
              <option value={items} key={items}>
                {items}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      {employees.length ? (
        <table {...getTableProps()} className="tableContainer">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr
                key={index}
                {...headerGroup.getHeaderGroupProps()}
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    className="column"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {" "}
                      {column.isSorted ? (column.isSortedDesc ? "▿" : "▵") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {page.length === 0 ? (
            <tbody className="noMatch">
              <tr>
                <td style={{ backgroundColor: "#f4f4f4" }}>No Match</td>
              </tr>
            </tbody>
          ) : (
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row)

                return (
                  <tr key={index} {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td
                          key={index}
                          className="column"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          )}
        </table>
      ) : (
        <Loader />
      )}
      <div className="tabFooter">
        <span>
          Showing {pageIndex + 1} to {pageOptions.length} of {employees.length}{" "}
          entries
        </span>
        <div className="pageBtns">
          <span
            id="previous"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={
              !canPreviousPage ? { color: "lightGrey" } : { color: "darkBlue" }
            }
          >
            Previous
          </span>
          <span className="pageNumber">{pageIndex + 1}</span>
          <span
            id="next"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={canNextPage ? { color: "darkBlue" } : { color: "lightGrey" }}
          >
            Next
          </span>
        </div>
      </div>
    </>
  )
}
export default Table
