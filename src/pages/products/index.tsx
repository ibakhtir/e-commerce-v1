import { IProduct, IFilterItem } from "@/types"
import brandService from "@/services/brand.service"
import categoryService from "@/services/category.service"
import productService from "@/services/product.service"
import { useAppSelector } from "@/redux/hooks"
import { getCategories, getBrands } from "@/redux/filter"
import { Filter } from "@/components/common"
import { ProductCard } from "@/components/product"

interface IProducts {
  brands: IFilterItem[]
  categories: IFilterItem[]
  products: IProduct[]
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

export default function Products({ brands, categories, products }: IProducts) {
  const filteredBrands = useAppSelector(getBrands)
  const filteredCategories = useAppSelector(getCategories)

  let filteredProducts: IProduct[] = []

  filteredProducts =
    filteredBrands.length > 0
      ? products.filter(({ brand }) => filteredBrands.includes(brand))
      : products

  filteredProducts =
    filteredCategories.length > 0
      ? filteredProducts.filter(({ category }) =>
          filteredCategories.includes(category)
        )
      : filteredProducts

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.filtersContainer}>
          <Filter type="brand" data={brands} filters={filteredBrands} />
          <Filter
            type="category"
            data={categories}
            filters={filteredCategories}
          />
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
