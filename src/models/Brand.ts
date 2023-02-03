import { model, models, Schema } from "mongoose"

const brandSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const Brand = models.Brand || model("Brand", brandSchema)

export default Brand
