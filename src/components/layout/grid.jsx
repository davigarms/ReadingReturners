import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { SPACING_S } from 'styles/dictionary'
import { remToInt } from 'utils/transform'
import { useBreakPoints } from 'utils/mediaquery'

export default function Grid({
  spacing = SPACING_S,
  height,
  cols,
  children,
  gridRatio,
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

  useEffect(() => {
    setBreakPoint()
  }, [setBreakPoint])

  useEffect(() => {
    setCalculatedHeight(
      height
        ? `${height}px`
        : gridRatio
        ? `${
            (wrapperRef.current.offsetWidth / deviceCols -
              remToInt(spacing)) /
            gridRatio
          }px`
        : 'initial'
    )
  }, [deviceCols, height, spacing, gridRatio, breakPoint])

  return (
    <Wrapper
      ref={wrapperRef}
      style={{
        '--height': calculatedHeight,
        '--width': `${100 / deviceCols}%`,
        '--spacing': spacing,
      }}
      cols={deviceCols}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: calc(-1 * var(--spacing)) 0 0 calc(-1 * var(--spacing));
  width: calc(100% + var(--spacing));

  > * {
    width: calc(var(--width) - var(--spacing)) !important;
    margin: var(--spacing) 0 0 var(--spacing);
    height: var(--height) !important;
    max-height: var(--height);
    overflow: hidden;
  }
`
