import { NextApiRequest, NextApiResponse } from "next"

import connectDB from "@/utils/connectDB"
import Category from "@/models/Category"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await connectDB()

  switch (method) {
    case "GET":
      try {
        const categories = await Category.find()

        res.status(200).json(categories)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "POST":
      try {
        const newCategory = await Category.create(req.body)

        res.status(201).json(newCategory)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    default:
      break
  }
}
