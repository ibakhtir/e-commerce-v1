import { FC } from "react"

import { useAppDispatch } from "@/redux/hooks"
import { openSb, setSbView } from "@/redux/ui"
import { Bag, Menu } from "@/components/icons"
import { Button } from "@/components/ui"

const s = {
  list: `flex justify-center items-center space-x-4`,
  menu: `block lg:hidden`
}

const UserNav: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <nav>
      <ul className={s.list}>
        <li>
          <Button
            aria-label="Cart items"
            variant="naked"
            onClick={() => {
              dispatch(setSbView("CART_VIEW"))
              dispatch(openSb())
            }}
          >
            <Bag />
          </Button>
        </li>
        <li className={s.menu}>
          <Button
            aria-label="Menu"
            variant="naked"
            onClick={() => {
              dispatch(setSbView("MENU_VIEW"))
              dispatch(openSb())
            }}
          >
            <Menu />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
