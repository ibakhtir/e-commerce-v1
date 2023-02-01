import { FC, ReactNode } from "react"

import { ChevronLeft, Cross } from "@/components/icons"
import { Button } from "@/components/ui"
import { UserNav } from "@/components/common"

interface ISbHeader {
  children?: ReactNode
  onBack?: () => void
  onClose?: () => void
}

const s = {
  wrapper: `relative flex flex-col h-full`,
  header: `sticky top-0 z-10 flex flex-wrap justify-between items-center h-16`,
  container: `flex flex-col flex-1`,
  btnIcon: `w-6 h-6`,
  btnTitle: `ml-2 font-normal normal-case text-sm`
}

const SbHeader: FC<ISbHeader> = ({ children, onBack, onClose }) => (
  <div className={s.wrapper}>
    <header className={s.header}>
      {onClose && (
        <Button variant="naked" aria-label="Close" onClick={onClose}>
          <Cross className={s.btnIcon} />
          <span className={s.btnTitle}>Close</span>
        </Button>
      )}

      {onBack && (
        <Button variant="naked" aria-label="Go back" onClick={onBack}>
          <ChevronLeft className={s.btnIcon} />
          <span className={s.btnTitle}>Back</span>
        </Button>
      )}

      <UserNav />
    </header>
    <div className={s.container}>{children}</div>
  </div>
)

export default SbHeader
