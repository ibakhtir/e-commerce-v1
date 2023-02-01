import { FC } from "react"
import Link from "next/link"
import cn from "clsx"

import useScrollPosition from "@/hooks/useScrollPosition"
import { routes, navLinks } from "@/utils/constants"
import { Logo } from "@/components/icons"
import { UserNav } from "@/components/common"

const s = {
  wrapper: `sticky top-0 z-40 bg-white/30 backdrop-blur-md transition-all duration-150`,
  container: `flex flex-wrap justify-between items-center h-16 max-w-7xl mx-auto px-6`,
  logo: `w-8 h-8`,
  nav: `flex justify-between items-center`,
  navLinks: `hidden lg:flex justify-center items-center space-x-4 ml-10`,
  link: `hover:opacity-75 transition ease-in-out duration-150`,
  shadow: `shadow-md`
}

const Navbar: FC = () => {
  const { HOME_ROUTE } = routes

  const scrollPosition = useScrollPosition()
  const isScrolled = scrollPosition.y > 0

  return (
    <div className={cn(s.wrapper, { [s.shadow]: isScrolled })}>
      <div className={s.container}>
        <nav className={s.nav}>
          <Link href={HOME_ROUTE} aria-label="Logo">
            <Logo className={s.logo} />
          </Link>

          <ul className={s.navLinks}>
            {navLinks.map(({ name, route, label }) => (
              <li key={name} className={s.link}>
                <Link href={route} aria-label={label}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <UserNav />
      </div>
    </div>
  )
}

export default Navbar
