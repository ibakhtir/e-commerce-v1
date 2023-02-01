import { useState } from "react"

import useEventListener from "./useEventListener"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"

interface IScrollPosition {
  x: number
  y: number
  lastX: number
  lastY: number
}

function useScrollPosition(): IScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<IScrollPosition>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
  })

  const handleScroll = () => {
    setScrollPosition((last) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y
    }))
  }

  useEventListener("scroll", handleScroll)

  // Set scroll position at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleScroll()
  }, [])

  return scrollPosition
}

export default useScrollPosition
