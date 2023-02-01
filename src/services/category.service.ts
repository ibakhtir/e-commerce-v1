import { ICategory } from "@/types"

import httpService from "./http.service"

const categoriesEndpoint = "/categories"

const categoryService = {
  get: async () => {
    const { data } = await httpService.get(categoriesEndpoint)

    return data
  },

  create: async (payload: ICategory) => {
    const { data } = await httpService.post(categoriesEndpoint, payload)

    return data
  },

  update: async (payload: ICategory) => {
    const { data } = await httpService.put(
      categoriesEndpoint + payload._id,
      payload
    )

    return data
  },

  remove: async (id: string) => {
    const { data } = await httpService.delete(categoriesEndpoint + id)

    return data
  }
}

export default categoryService
