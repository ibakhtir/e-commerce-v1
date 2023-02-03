import { IFilterItem } from "@/types"

import httpService from "./http.service"

const brandsEndpoint = "/brands"

const brandService = {
  get: async () => {
    const { data } = await httpService.get(brandsEndpoint)

    return data
  },

  create: async (payload: IFilterItem) => {
    const { data } = await httpService.post(brandsEndpoint, payload)

    return data
  },

  update: async (payload: IFilterItem) => {
    const { data } = await httpService.put(
      brandsEndpoint + payload._id,
      payload
    )

    return data
  },

  remove: async (id: string) => {
    const { data } = await httpService.delete(brandsEndpoint + id)

    return data
  }
}

export default brandService
