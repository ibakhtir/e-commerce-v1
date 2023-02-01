import { NextApiRequest, NextApiResponse } from "next"

import connectDB from "@/utils/connectDB"
import Product from "@/models/Product"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req

  await connectDB()

  switch (method) {
    case "GET":
      try {
        const products = await Product.find(query || {})

        res.status(200).json(products)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "POST":
      try {
        const newProduct = await Product.create(req.body)

        res.status(201).json(newProduct)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    default:
      break
  }
}
