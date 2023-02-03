import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "./store"

interface IFilterIS {
  brands: string[]
  categories: string[]
}

const initialState: IFilterIS = {
  brands: [],
  categories: []
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectBrand: (state, action: PayloadAction<string>) => {
      state.brands.push(action.payload)
    },

    selectCategory: (state, action: PayloadAction<string>) => {
      state.categories.push(action.payload)
    },

    deselectBrand: (state, action: PayloadAction<string>) => {
      state.brands = state.brands.filter((b) => b !== action.payload)
    },

    deselectCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter((c) => c !== action.payload)
    },

    clearFilters: (state) => {
      state.brands = []
      state.categories = []
    }
  }
})

const { reducer: filterReducer, actions } = filterSlice

export const {
  selectBrand,
  selectCategory,
  deselectBrand,
  deselectCategory,
  clearFilters
} = actions

export const getCategories = (state: RootState) => state.filter.categories
export const getBrands = (state: RootState) => state.filter.brands

export default filterReducer
