import { GetStaticPropsContext } from "next"

import productService from "@/services/product.service"
import { getAllStaticPaths } from "@/utils/helpers"
import Product from "@/components/product"

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

export default Product
