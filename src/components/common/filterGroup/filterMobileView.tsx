import { FC, ReactNode, useState } from "react"

import { Adjustment } from "@/components/icons"
import { Dropdown } from "@/components/ui"

interface IFilterMobileView {
  children: ReactNode
}

const s = {
  container: `pt-1 pb-3 px-4`
}

const FilterMobileView: FC<IFilterMobileView> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSort = () => setIsOpen(!isOpen)

  return (
    <Dropdown
      isOpen={isOpen}
      title="Filter"
      icon={<Adjustment />}
      onToggle={toggleSort}
      onClose={() => setIsOpen(false)}
    >
      <div className={s.container}>{children}</div>
    </Dropdown>
  )
}

export default FilterMobileView
