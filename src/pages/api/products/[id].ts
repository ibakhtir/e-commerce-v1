import { NextApiRequest, NextApiResponse } from "next"

import connectDB from "@/utils/connectDB"
import Product from "@/models/Product"

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
        const existingProduct = await Product.findById(id)

        if (!existingProduct) {
          return res
            .status(400)
            .json({ message: `The product with id: ${id} was not found.` })
        }

        res.status(200).send(existingProduct)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "PUT":
      try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
          new: true
        })

        if (!updatedProduct) {
          return res
            .status(400)
            .json({ message: `The product with id: ${id} was not found.` })
        }

        res.status(200).send(updatedProduct)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    case "DELETE":
      try {
        const deletedProduct = await Product.deleteOne({ _id: id })

        if (!deletedProduct) {
          return res
            .status(400)
            .json({ message: `The product with id: ${id} was not found.` })
        }

        res.status(200).send(`The product with id: ${id} has been deleted.`)
      } catch (error) {
        res.status(500).json({ message: (error as Error).message })
      }
      break

    default:
      break
  }
}
