import { configureStore } from "@reduxjs/toolkit"

import uiReducer from "./ui"
import filterReducer from "./filter"

const store = configureStore({
  reducer: {
    ui: uiReducer,
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
