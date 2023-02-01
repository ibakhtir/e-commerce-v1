import { FC } from "react"

import { useAppDispatch } from "@/redux/hooks"
import { closeSb } from "@/redux/ui"
import { Bag } from "@/components/icons"
import { SbHeader } from "@/components/common/sidebar"

const s = {
  emptyBlock: `flex flex-col flex-1 justify-center items-center`,
  emptyIconWrapper: `flex items-center justify-center bg-black text-white 
  rounded-full border border-dashed w-16 h-16 p-12`,
  emptyIcon: `absolute w-6 h-6`,
  emptyTitle: `font-bold text-2xl text-center tracking-wide pt-6`,
  emptySubtitle: `text-accent-3 text-center px-10 pt-2`
}

const CartSbView: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <SbHeader onClose={() => dispatch(closeSb())}>
      <div className={s.emptyBlock}>
        <span className={s.emptyIconWrapper}>
          <Bag className={s.emptyIcon} />
        </span>
        <h2 className={s.emptyTitle}>Your cart is empty</h2>
        <p className={s.emptySubtitle}>
          Looks like you have not added anything to your cart yet.
        </p>
      </div>
    </SbHeader>
  )
}

export default CartSbView
