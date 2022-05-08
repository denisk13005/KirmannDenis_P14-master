import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getEmployees } from "../utils/apiDbFiresbase"

/**
 * async thunk who fetch de employees saved in the firestore db
 */
export const fetchDbEmployees = createAsyncThunk(
  "employees/fetchDbEmployees",
  async () => {
    let datas = await getEmployees()
    return datas
  }
)

/**
 * employeeSlice
 * redux toolkit slice
 * @returns {reducer}  return reducer for modify redux state
 */

const employeesSlice = createSlice({
  //nom du slice
  name: "employees",
  initialState: {
    informations: [],
    modalIsOpen: false,
    adminLoggedIn: false,
  },
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true
      return state
    },
    closeModal: (state) => {
      state.modalIsOpen = false
      return state
    },
    logIn: (state) => {
      state.adminLoggedIn = true
      return state
    },
    logOut: (state) => {
      state.adminLoggedIn = false
      return state
    },
  },
  extraReducers: {
    [fetchDbEmployees.fulfilled]: (state, { payload }) => {
      state.informations = [...payload]
      return state
    },
  },
})

export const {
  addEmployee,
  openModal,
  closeModal,
  getDbEmployees,
  logIn,
  logOut,
} = employeesSlice.actions
export default employeesSlice.reducer
