import { useCallback, useState } from 'react'

import {
  BREAKPOINT_XXS,
  BREAKPOINT_XS,
  BREAKPOINT_S,
  BREAKPOINT_M,
  BREAKPOINT_L,
  BREAKPOINT_XL,
} from 'styles/dictionary'

export function useBreakPoints() {
  const [breakPoint, setBreakPoint] = useState()

  const getBreakPoint = useCallback(() => {
    const breakPoints = {
      xxs: BREAKPOINT_XXS,
      xs: BREAKPOINT_XS,
      s: BREAKPOINT_S,
      m: BREAKPOINT_M,
      l: BREAKPOINT_L,
      xl: BREAKPOINT_XL,
    }

    Object.entries(breakPoints).forEach((bp, i, arr) => {
      const mediaQuery = `${
        i < arr.length - 1
          ? '(max-width: ' +
            parseFloat(parseFloat(arr[i + 1][1]) - 1) +
            'px) and '
          : ''
      }(min-width: ${bp[1]})`

      const mq = window.matchMedia(mediaQuery)

      if (mq.matches) setBreakPoint(bp[0])

      mq.addEventListener('change', (mq) => {
        if (mq.matches) setBreakPoint(bp[0])
      })
    })
  }, [])

  return [breakPoint, getBreakPoint]
}
