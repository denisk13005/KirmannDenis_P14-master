import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getDbInfos } from "../utils/getDbInformations"

/**
 * async thunk who fetch de employees saved in the db
 */
export const fetchDbEmployees = createAsyncThunk(
  "employees/fetchDbEmployees",
  async () => {
    let datas = await getDbInfos()
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
  },
  reducers: {
    addEmployee: (state, action) => {
      state.informations = [...state.informations, action.payload]
      return state
    },
    openModal: (state) => {
      state.modalIsOpen = true
      return state
    },
    closeModal: (state) => {
      state.modalIsOpen = false
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

export const { addEmployee, openModal, closeModal, getDbEmployees } =
  employeesSlice.actions
export default employeesSlice.reducer
