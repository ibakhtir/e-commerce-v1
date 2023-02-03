import { NextApiRequest, NextApiResponse } from "next"

import connectDB from "@/utils/connectDB"
import Brand from "@/models/Brand"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await connectDB()

  switch (method) {
    case "GET":
      try {
        const brands = await Brand.find()

        res.status(200).json(brands)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "POST":
      try {
        const newBrand = await Brand.create(req.body)

        res.status(201).json(newBrand)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    default:
      break
  }
}
