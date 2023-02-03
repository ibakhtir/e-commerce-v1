import { GetStaticPropsContext } from "next"
import { useRouter } from "next/router"

import { IProduct } from "@/types"
import productService from "@/services/product.service"
import { getAllStaticPaths } from "@/utils/helpers"

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

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context

  const slug = typeof params?.slug === "string" ? params.slug : ""

  const product = await productService.getBySlug(slug)

  return {
    props: {
      product: product[0]
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const products = await productService.get()

  const paths = getAllStaticPaths(products)

  return {
    paths,
    fallback: true
  }
}
