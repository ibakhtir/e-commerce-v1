import { FC } from "react"
import Link from "next/link"

import { ILinks } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { closeSb } from "@/redux/ui"
import { SbHeader } from "@/components/common/sidebar"

const s = {
  nav: `h-full`,
  navLinks: `flex flex-col justify-center items-center h-full space-y-8`,
  link: `text-2xl tracking-wide hover:opacity-75 transition ease-in-out duration-150`
}

const MenuSbView: FC<ILinks> = ({ links }) => {
  const dispatch = useAppDispatch()

  return (
    <SbHeader onClose={() => dispatch(closeSb())}>
      <nav className={s.nav}>
        <ul className={s.navLinks}>
          {links.map(({ name, route, label }) => (
            <li
              key={name}
              className={s.link}
              onClick={() => dispatch(closeSb())}
            >
              <Link href={route} aria-label={label}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SbHeader>
  )
}

export default MenuSbView
