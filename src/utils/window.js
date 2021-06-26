import { useCallback, useState } from 'react'

import {
  BREAKPOINT_XXS,
  BREAKPOINT_XS,
  BREAKPOINT_S,
  BREAKPOINT_M,
  BREAKPOINT_L,
  BREAKPOINT_XL,
} from 'styles/dictionary'

export function useWindowWidth() {
  const [breakPoint, setBreakPoint] = useState()
  const [windowWidth, setWindowWidth] = useState()

  const getWindowWidth = useCallback(() => {
    const breakPoints = {
      xxs: BREAKPOINT_XXS,
      xs: BREAKPOINT_XS,
      s: BREAKPOINT_S,
      m: BREAKPOINT_M,
      l: BREAKPOINT_L,
      xl: BREAKPOINT_XL,
    }

    const getBreakPoint = (breakPoints) => {
      return Object.entries(breakPoints)
        .filter((i) => window.innerWidth >= parseFloat(i[1]))
        .map((i) => i[0])
        .reverse()[0]
    }

    window.addEventListener('resize', () => {
      setBreakPoint(getBreakPoint(breakPoints))
      setWindowWidth(window.innerWidth)
    })

    setBreakPoint(getBreakPoint(breakPoints))
  }, [])

  return [breakPoint, windowWidth, getWindowWidth]
}
