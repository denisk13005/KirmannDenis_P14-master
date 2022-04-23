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
    // Cell: ({ value }) => {
    //   return value
    // },
  },
  {
    Header: "Start Date",

    accessor: "start",
    // Cell: ({ value }) => {
    //   return value
    // },
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
