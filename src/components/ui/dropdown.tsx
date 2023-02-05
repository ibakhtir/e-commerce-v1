import { FC, ReactNode, MutableRefObject, useRef, ReactElement } from "react"
import cn from "clsx"

import useOnClickOutside from "@/hooks/useOnClickOutside"
import { ChevronDown } from "@/components/icons"
import { Button } from "@/components/ui"

interface IDropdown {
  children: ReactNode
  isOpen: boolean
  title: string
  icon?: ReactElement | null
  onToggle: () => void
  onClose: () => void
}

const s = {
  container: `relative`,
  button: `flex items-center justify-between border border-accent-2 rounded bg-accent-0
  font-normal text-sm capitalize lg:w-[180px] pl-3 pr-2 py-2`,
  icon: `hover:opacity-75 cursor-pointer`,
  menu: `absolute right-0 z-10 bg-accent-0 rounded shadow min-w-[180px] mt-2`
}

const Dropdown: FC<IDropdown> = ({
  children,
  isOpen,
  title,
  icon,
  onToggle,
  onClose
}) => {
  const dropdownRef = useRef(null) as MutableRefObject<HTMLDivElement | null>

  useOnClickOutside(dropdownRef, onClose)

  return (
    <div ref={dropdownRef} className={s.container}>
      <Button
        aria-label="Sorting options"
        className={cn(s.icon, {
          [s.button]: !icon
        })}
        onClick={onToggle}
      >
        {icon ? (
          icon
        ) : (
          <>
            {title}
            <ChevronDown />
          </>
        )}
      </Button>

      {isOpen ? <div className={s.menu}>{children}</div> : null}
    </div>
  )
}

export default Dropdown
