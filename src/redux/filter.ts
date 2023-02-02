import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "./store"

interface IFilterIS {
  categories: string[]
}

const initialState: IFilterIS = {
  categories: []
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.categories.push(action.payload)
    },

    deselectCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter((c) => c !== action.payload)
    },

    clearFilters: (state) => {
      state.categories = []
    }
  }
})

const { reducer: filterReducer, actions } = filterSlice

export const { selectCategory, deselectCategory, clearFilters } = actions

export const getFilteredCategories = (state: RootState) =>
  state.filter.categories

export default filterReducer
