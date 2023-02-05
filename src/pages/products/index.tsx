import brandService from "@/services/brand.service"
import categoryService from "@/services/category.service"
import productService from "@/services/product.service"
import Products from "@/components/products"

export async function getStaticProps() {
  const brands = await brandService.get()
  const categories = await categoryService.get()
  const products = await productService.get()

  return {
    props: {
      brands,
      categories,
      products
    },

    revalidate: 30
  }
}

export default Products
