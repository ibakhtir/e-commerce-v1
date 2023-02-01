import { FC } from "react"

import { useAppSelector } from "@/redux/hooks"
import { getSbDisplay, getSbView } from "@/redux/ui"
import { navLinks } from "@/utils/constants"
import { CartSbView } from "@/components/cart"
import { MenuSbView } from "@/components/common/userNav"
import { SbContainer } from "@/components/common/sidebar"

const Sidebar: FC = () => {
  const sbDisplay = useAppSelector(getSbDisplay)
  const sbView = useAppSelector(getSbView)

  return sbDisplay ? (
    <SbContainer>
      {sbView === "CART_VIEW" && <CartSbView />}
      {sbView === "MENU_VIEW" && <MenuSbView links={navLinks} />}
    </SbContainer>
  ) : null
}

export default Sidebar
