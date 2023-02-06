import { FC } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import cn from "clsx"

import { routes, navLinks } from "@/utils/constants"
import { Logo, Github } from "@/components/icons"

const s = {
  wrapper: `border-t border-accent-2 mt-20`,
  container: `max-w-7xl mx-auto px-6`,
  content: `grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 bg-primary text-primary`,
  logoContainer: `col-span-1 lg:col-span-2 max-w-fit`,
  logo: `w-8 h-8`,
  navLinksContainer: `col-span-1 lg:col-span-7`,
  navLinks: `grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col`,
  navListItem: `py-3 lg:py-0 lg:pb-3`,
  link: `hover:opacity-75 transition ease-in-out duration-150`,
  settingsContainer: `col-span-1 lg:col-span-3 flex items-start lg:justify-end text-primary`,
  settings: `flex items-center space-x-4 h-10`,
  socialLinks: `flex items-center space-x-4`
}

const Footer: FC = () => {
  const { HOME_ROUTE } = routes

  const router = useRouter()
  const { pathname } = router

  return (
    <footer
      className={cn(s.wrapper, {
        ["hidden"]: pathname === HOME_ROUTE
      })}
    >
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.logoContainer}>
            <Link href={HOME_ROUTE} aria-label="Logo">
              <Logo className={s.logo} />
            </Link>
          </div>

          <div className={s.navLinksContainer}>
            <ul className={s.navLinks}>
              {navLinks.map(({ name, route, label }) => (
                <li key={name} className={s.navListItem}>
                  <Link href={route} aria-label={label} className={s.link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.settingsContainer}>
            <div className={s.settings}>
              <a
                href="https://github.com/ibakhtir/e-commerce-v1"
                aria-label="Github repository"
                target="_blank"
                rel="noreferrer"
                className={s.link}
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
