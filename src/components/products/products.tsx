import { IProduct, IFilterItem } from "@/types"
import { useAppSelector } from "@/redux/hooks"
import { getBrands, getCategories, getSort } from "@/redux/filter"
import { sortBy } from "@/utils/helpers"
import { Filter, FilterMobileView, Sort } from "@/components/common/filterGroup"
import { ProductCard } from "@/components/product"

interface IProducts {
  brands: IFilterItem[]
  categories: IFilterItem[]
  products: IProduct[]
}

const s = {
  container: `grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4 pb-8`,
  title: `font-medium text-lg`,
  filtersContainer: `hidden lg:block col-span-2`,
  productsContainer: `flex flex-col lg:col-span-10 space-y-3`,
  productsHeader: `flex justify-between`,
  filtersAndSort: `flex space-x-4`,
  mobileFilters: `block lg:hidden`,
  productsList: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`
}

export default function Products({ brands, categories, products }: IProducts) {
  const filteredBrands = useAppSelector(getBrands)
  const filteredCategories = useAppSelector(getCategories)
  const currentSort = useAppSelector(getSort)

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

  filteredProducts = sortBy(currentSort.value, filteredProducts)

  return (
    <div className={s.container}>
      <aside className={s.filtersContainer}>
        <h5 className={s.title}>Filters</h5>
        <Filter
          type="brand"
          data={brands}
          filters={filteredBrands}
          marginTop={32}
        />
        <Filter
          type="category"
          data={categories}
          filters={filteredCategories}
          marginTop={32}
        />
      </aside>

      <div className={s.productsContainer}>
        <div className={s.productsHeader}>
          <h5 className={s.title}>Products</h5>
          <div className={s.filtersAndSort}>
            <div className={s.mobileFilters}>
              <FilterMobileView>
                <Filter
                  type="brand"
                  data={brands}
                  filters={filteredBrands}
                  marginTop={8}
                />
                <Filter
                  type="category"
                  data={categories}
                  filters={filteredCategories}
                  marginTop={8}
                />
              </FilterMobileView>
            </div>
            <Sort />
          </div>
        </div>

        <div className={s.productsList}>
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
