import { FC } from "react"
import Link from "next/link"
import Image from "next/image"

import { IProduct } from "@/types"
import { Plus } from "@/components/icons"
import { Button } from "@/components/ui"

interface IProductCard {
  product: IProduct
}

const s = {
  imgWrapper: `relative rounded overflow-hidden group transition`,
  imgContainer: `flex justify-center items-center w-full h-full`,
  image: `group-hover:scale-110 transition duration-300`,
  btnContainer: `flex flex-col justify-center items-center gap-y-1 absolute top-1 right-1`,
  button: `bg-white rounded w-10 h-10 opacity-75 hover:opacity-100 outline-offset-1`,
  title: `font-semibold text-sm overflow-hidden text-ellipsis whitespace-nowrap mt-3`,
  price: `inline-block font-medium text-accent-3 uppercase mt-1`
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  const { name, slug, price, images } = product

  return (
    <Link href={`/products/${slug}`} aria-label={name}>
      <div className={s.imgWrapper}>
        <div className={s.imgContainer}>
          <Image
            src={images.main}
            alt={name}
            width={600}
            height={600}
            quality={85}
            priority
            unoptimized={true}
            className={s.image}
          />
        </div>

        <div className={s.btnContainer}>
          <Button aria-label="Add product to cart" className={s.button}>
            <Plus />
          </Button>
        </div>
      </div>

      <h4 className={s.title}>{name}</h4>
      <span className={s.price}>{`$${price} USD`}</span>
    </Link>
  )
}

export default ProductCard
