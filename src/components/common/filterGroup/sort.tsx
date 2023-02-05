import { FC, useState } from "react"
import cn from "clsx"

import { ISortListItem } from "@/types"
import useWindowSize from "@/hooks/useWindowSize"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getSort, setSort } from "@/redux/filter"
import { sortList } from "@/utils/constants"
import { ArrowsUpDown } from "@/components/icons"
import { Dropdown } from "@/components/ui"

const s = {
  list: `text-sm py-2`,
  listItem: `text-accent-5 px-4 py-2 cursor-pointer`,
  active: `bg-accent-2 text-accent-8`
}

const Sort: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const currentSort = useAppSelector(getSort)

  const dispatch = useAppDispatch()

  const { width } = useWindowSize()

  const handleSort = (sort: ISortListItem) => {
    dispatch(setSort(sort))
    setIsOpen(false)
  }

  const toggleSort = () => setIsOpen(!isOpen)

  return (
    <Dropdown
      isOpen={isOpen}
      title={currentSort.label}
      icon={width < 1024 ? <ArrowsUpDown /> : null}
      onToggle={toggleSort}
      onClose={() => setIsOpen(false)}
    >
      <ul className={s.list}>
        {sortList.map(({ value, label }) => (
          <li
            key={value}
            className={cn(s.listItem, {
              [s.active]: value === currentSort.value
            })}
            onClick={() => handleSort({ value, label })}
          >
            {label}
          </li>
        ))}
      </ul>
    </Dropdown>
  )
}

export default Sort
