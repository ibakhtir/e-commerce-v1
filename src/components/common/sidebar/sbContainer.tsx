import {
  FC,
  ReactNode,
  KeyboardEvent,
  MutableRefObject,
  useEffect,
  useRef
} from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closeSb, getSbDisplay, getSbView } from "@/redux/ui"
import useLockedBody from "@/hooks/useLockedBody"
import useOnClickOutside from "@/hooks/useOnClickOutside"

interface ISbContainer {
  children: ReactNode
}

const s = {
  wrapper: `fixed inset-0 z-50`,
  backdrop: `absolute inset-0 bg-black/30 backdrop-blur-[1px]`,
  container: `absolute inset-y-0 right-0 w-full md:w-auto`,
  sidebar: `flex flex-col h-full w-full md:w-screen md:max-w-md 
  bg-white shadow-xl overflow-y-auto overflow-x-hidden px-6`
}

const SbContainer: FC<ISbContainer> = ({ children }) => {
  const sbDisplay = useAppSelector(getSbDisplay)
  const sbView = useAppSelector(getSbView)

  const dispatch = useAppDispatch()

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const sidebarRef = useRef(null) as MutableRefObject<HTMLDivElement | null>

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.focus()
    }
  }, [sbView])

  const onKeyDownSidebar = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Escape") {
      dispatch(closeSb())
    }
  }

  useLockedBody(sbDisplay)

  useOnClickOutside(sidebarRef, () => dispatch(closeSb()))

  return (
    <div
      ref={wrapperRef}
      className={s.wrapper}
      tabIndex={0}
      onKeyDown={onKeyDownSidebar}
    >
      <div className={s.backdrop} />
      <div ref={sidebarRef} className={s.container}>
        <aside className={s.sidebar}>{children}</aside>
      </div>
    </div>
  )
}

export default SbContainer
