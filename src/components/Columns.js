import { format } from "date-fns"
const columns = [
  {
    Header: "First name",
    accessor: "firstName", // accessor is the "key" in the data
  },

  {
    Header: "Last Name",

    accessor: "lastName",
  },
  {
    Header: "Birthday",

    accessor: "birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy")
    },
  },
  {
    Header: "Start Date",

    accessor: "start",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy")
    },
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zip",
  },
  {
    Header: "Department",
    accessor: "dept",
  },
]
export default columns
