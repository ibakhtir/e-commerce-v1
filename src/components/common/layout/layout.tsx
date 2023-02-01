import { FC, ReactNode } from "react"
import { Roboto } from "@next/font/google"

interface ILayout {
  children: ReactNode
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

const s = {
  container: `fit-height max-w-7xl mx-auto px-6`
}

const Layout: FC<ILayout> = ({ children }) => (
  <div className={roboto.className}>
    <main className={s.container}>{children}</main>
  </div>
)

export default Layout
