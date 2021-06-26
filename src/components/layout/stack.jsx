import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SPACING_S } from 'styles/dictionary'
import { remToInt } from 'utils/util'

export default function Stack({
  spacing = SPACING_S,
  view = 'list',
  height,
  cols = 1,
  children,
}) {
  const wrapperRef = useRef()
  const [windowWidth, setWindowWidth] = useState()
  const [calculatedHeight, setCalculatedHeight] = useState()

  useEffect(() => {
    setCalculatedHeight(
      view === 'cover'
        ? height ||
            `${
              ((wrapperRef.current.offsetWidth / cols -
                remToInt(spacing)) /
                2) *
              3
            }px`
        : 'initial'
    )
  }, [height, view, cols, spacing, windowWidth])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  })

  cols = view === 'list' ? 1 : view === 'cover' && cols < 2 ? 2 : cols

  return (
    <Wrapper
      ref={wrapperRef}
      style={{
        '--height': calculatedHeight,
        '--width': `${100 / cols}%`,
        '--spacing': spacing,
      }}
      cols={cols}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: calc(-1 * var(--spacing)) 0 0 calc(-1 * var(--spacing));
  width: calc(100% + var(--spacing));

  > * {
    flex: 0 0 calc(var(--width) - var(--spacing));
    margin: var(--spacing) 0 0 var(--spacing);
    height: var(--height);
    max-height: var(--height);
    overflow: hidden;
  }
`
