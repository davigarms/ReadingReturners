import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SPACING_S } from 'styles/dictionary'
import { remToInt } from 'utils/util'
import { useBreakPoints } from 'lib/break-point'

export default function Stack({
  spacing = SPACING_S,
  view = 'list',
  height,
  cols = 1,
  children,
  gridRatio = 2 / 3,
}) {
  const wrapperRef = useRef()
  const [calculatedHeight, setCalculatedHeight] = useState()
  const [breakPoint, setBreakPoint] = useBreakPoints()

  const deviceCols =
    cols[breakPoint] ||
    cols.xxl ||
    cols.xl ||
    cols.l ||
    cols.m ||
    cols.s ||
    cols.xs ||
    cols.xxs ||
    cols

  cols =
    view === 'list'
      ? 1
      : view === 'grid' && deviceCols < 2
      ? 2
      : deviceCols

  useEffect(() => {
    setBreakPoint()
  }, [setBreakPoint])

  useEffect(() => {
    setCalculatedHeight(
      view === 'grid'
        ? height ||
            `${
              (wrapperRef.current.offsetWidth / cols -
                remToInt(spacing)) /
              gridRatio
            }px`
        : 'initial'
    )
  }, [height, view, cols, spacing, gridRatio, breakPoint])

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
