import { model, models, Schema } from "mongoose"

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    gender: { type: String, required: true },
    sizes: [String],
    colors: [String],
    price: { type: Number, required: true },
    salePrice: Number,
    images: {
      main: { type: String, required: true },
      collection: [String]
    }
  },
  {
    timestamps: true
  }
)

const Product = models.Product || model("Product", productSchema)

export default Product
