import { useRouter } from "next/router"

import { IProduct } from "@/types"

interface IProductPage {
  product: IProduct
}

export default function Product({ product }: IProductPage) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <div>{product.name}</div>
}
