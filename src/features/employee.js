import { createSlice } from "@reduxjs/toolkit"
import { informations } from "../mocks/datas"

/**
 * employeeSlice
 * redux toolkit slice
 * @returns {reducer}  return reducer for modify redux state
 */

const employeesSlice = createSlice({
  //nom du slice
  name: "employees",
  initialState: {
    informations: informations,
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
})

export const { addEmployee, openModal, closeModal } = employeesSlice.actions
export default employeesSlice.reducer
