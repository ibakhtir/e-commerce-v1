import { IProduct } from "@/types"

export function getAllStaticPaths(data: IProduct[]) {
  return data.map(({ slug }) => ({ params: { slug } }))
}

export function sortBy(sortValue: string, data: IProduct[]) {
  const sortedData = [...data]

  if (sortValue === "price-desc") {
    return sortedData.sort((a, b) => +b.price - +a.price)
  }

  if (sortValue === "price-asc") {
    return sortedData.sort((a, b) => +a.price - +b.price)
  }

  return data
}
