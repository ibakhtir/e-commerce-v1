import { IProduct, ICategory } from "@/types"
import productService from "@/services/product.service"
import categoryService from "@/services/category.service"
import { useAppSelector } from "@/redux/hooks"
import { getFilteredCategories } from "@/redux/filter"
import { Filter } from "@/components/common"
import { ProductCard } from "@/components/product"

interface IProducts {
  products: IProduct[]
  categories: ICategory[]
}

const s = {
  wrapper: `py-5`,
  container: `grid grid-cols-1 lg:grid-cols-12 gap-4`,
  filtersContainer: `col-span-8 lg:col-span-2 order-1 lg:order-none`,
  sortContainer: `col-span-8 lg:col-span-2 order-2 lg:order-none`,
  productsContainer: `col-span-8 order-3 lg:order-none`,
  productsList: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,
  productSkeleton: `w-60 h-60 bg-accent-2 rounded`
}

const Products = ({ products, categories }: IProducts) => {
  const filteredCategories = useAppSelector(getFilteredCategories)

  let filteredProducts: IProduct[] = []

  filteredProducts =
    filteredCategories.length > 0
      ? products.filter(({ category }) => filteredCategories.includes(category))
      : products

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.filtersContainer}>
          <Filter data={categories} type="category" />
        </div>

        <div className={s.productsContainer}>
          <div className={s.productsList}>
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>

        <div className={s.sortContainer}>Sorting</div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await productService.get()
  const categories = await categoryService.get()

  return {
    props: {
      products,
      categories
    },
    revalidate: 30
  }
}

export default Products
