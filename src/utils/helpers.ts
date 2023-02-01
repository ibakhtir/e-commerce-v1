import { IProduct } from "@/types"

export function getAllStaticPaths(data: IProduct[]) {
  return data.map(({ slug }) => ({ params: { slug } }))
}
