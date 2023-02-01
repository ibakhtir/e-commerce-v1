import { NextApiRequest, NextApiResponse } from "next"

import connectDB from "@/utils/connectDB"
import Category from "@/models/Category"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method
  } = req

  await connectDB()

  switch (method) {
    case "GET":
      try {
        const existingCategory = await Category.findById(id)

        if (!existingCategory) {
          return res
            .status(400)
            .json({ message: `The category with id: ${id} was not found.` })
        }

        res.status(200).send(existingCategory)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "PUT":
      try {
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
          new: true
        })

        if (!updatedCategory) {
          return res
            .status(400)
            .json({ message: `The category with id: ${id} was not found.` })
        }

        res.status(200).send(updatedCategory)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "DELETE":
      try {
        const deletedCategory = await Category.deleteOne({ _id: id })

        if (!deletedCategory) {
          return res
            .status(400)
            .json({ message: `The category with id: ${id} was not found.` })
        }

        res.status(200).send(`The category with id: ${id} has been deleted.`)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    default:
      break
  }
}
