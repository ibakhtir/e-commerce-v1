import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

const initialState = {
  sbDisplay: false,
  sbView: "CART_VIEW"
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSb: (state) => {
      state.sbDisplay = true
    },

    closeSb: (state) => {
      state.sbDisplay = false
    },

    setSbView: (state, action: PayloadAction<string>) => {
      state.sbView = action.payload
    }
  }
})

const { reducer: uiReducer, actions } = uiSlice

export const { openSb, closeSb, setSbView } = actions

export const getSbDisplay = (state: RootState) => state.ui.sbDisplay
export const getSbView = (state: RootState) => state.ui.sbView

export default uiReducer
