import { IMongoDBBody } from "./mongodb"

export interface IProductImages {
  main: string
  collection?: string[]
}

export interface IProduct extends IMongoDBBody {
  name: string
  description?: string
  slug: string
  category: string
  gender: string
  sizes?: string[]
  colors?: string[]
  price: number
  salePrice?: number
  images: IProductImages
}
