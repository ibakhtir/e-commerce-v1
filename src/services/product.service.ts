import { IProduct } from "@/types"

import httpService from "./http.service"

const productsEndpoint = "/products"

const productService = {
  get: async () => {
    const { data } = await httpService.get(productsEndpoint)

    return data
  },

  create: async (payload: IProduct) => {
    const { data } = await httpService.post(productsEndpoint, payload)

    return data
  },

  update: async (payload: IProduct) => {
    const { data } = await httpService.put(
      productsEndpoint + payload._id,
      payload
    )

    return data
  },

  remove: async (id: string) => {
    const { data } = await httpService.delete(productsEndpoint + id)

    return data
  }
}

export default productService
