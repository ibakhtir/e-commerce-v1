export interface IProductImages {
  main: string
  collection?: string[]
}

export interface IProduct {
  _id: string
  name: string
  description: string
  slug: string
  brand: string
  category: string
  gender: string
  sizes?: string[]
  colors?: string[]
  price: number
  salePrice?: number
  images: IProductImages
  createdAt: Date
  updatedAt: Date
  __v: number
}
