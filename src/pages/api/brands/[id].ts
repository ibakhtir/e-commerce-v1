import { NextApiRequest, NextApiResponse } from "next"

import connectDB from "@/utils/connectDB"
import Brand from "@/models/Brand"

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
        const existingBrand = await Brand.findById(id)

        if (!existingBrand) {
          return res
            .status(400)
            .json({ message: `The brand with id: ${id} was not found.` })
        }

        res.status(200).send(existingBrand)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "PUT":
      try {
        const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
          new: true
        })

        if (!updatedBrand) {
          return res
            .status(400)
            .json({ message: `The brand with id: ${id} was not found.` })
        }

        res.status(200).send(updatedBrand)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "DELETE":
      try {
        const deletedBrand = await Brand.deleteOne({ _id: id })

        if (!deletedBrand) {
          return res
            .status(400)
            .json({ message: `The brand with id: ${id} was not found.` })
        }

        res.status(200).send(`The brand with id: ${id} has been deleted.`)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    default:
      break
  }
}
