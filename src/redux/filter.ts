import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ISortListItem } from "@/types"

import { RootState } from "./store"

interface IFilterIS {
  brands: string[]
  categories: string[]
  sort: ISortListItem
}

const initialState: IFilterIS = {
  brands: [],
  categories: [],
  sort: {
    value: "trending",
    label: "Trending"
  }
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

    setSort(state, action: PayloadAction<ISortListItem>) {
      state.sort = action.payload
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
  setSort,
  clearFilters
} = actions

export const getBrands = (state: RootState) => state.filter.brands
export const getCategories = (state: RootState) => state.filter.categories
export const getSort = (state: RootState) => state.filter.sort

export default filterReducer
