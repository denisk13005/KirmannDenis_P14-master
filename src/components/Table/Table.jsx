import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getDocs } from "firebase/firestore"
import { employeesCollectionRef } from "../../utils/firebase.config"
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table"
// import mock from "../../mocks/mock.json"
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
  // const employees = useSelector((state) => state.employees.informations)
  const [employees, setEmployeesTest] = useState([])

  // const employeesCollectionRef = collection(db, "employees")

  const getEmployees = async () => {
    const data = await getDocs(employeesCollectionRef)
    setEmployeesTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    getEmployees()
  }, [])
  console.log(employees)

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

      <table {...getTableProps()} className="tableContainer">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="column"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {" "}
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="column" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
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
          >
            Previous
          </span>
          <span className="pageNumber">{pageIndex + 1}</span>
          <span id="next" onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </span>
        </div>
      </div>
    </>
  )
}
export default Table
