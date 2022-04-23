import { configureStore } from "@reduxjs/toolkit"
import employeesSlice from "../features/employee"

/**
 * redux store
 * @returns {store} redux store
 */
export const store = configureStore({
  reducer: {
    employees: employeesSlice,
  },
})
