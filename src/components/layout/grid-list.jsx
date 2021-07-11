import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { SPACING_S } from 'styles/dictionary'
import { remToInt } from 'utils/transform'
import { useBreakPoints } from 'utils/mediaquery'

export default function GridList({
  children,
  gutter = SPACING_S,
  cols = 1,
  height,
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
        ? height
        : gridRatio
        ? `${
            (wrapperRef.current.offsetWidth / deviceCols - remToInt(gutter)) /
            gridRatio
          }px`
        : 'initial'
    )
  }, [deviceCols, height, gutter, gridRatio, breakPoint])

  return (
    <Wrapper
      ref={wrapperRef}
      style={{
        '--height': calculatedHeight,
        '--width': `${100 / deviceCols}%`,
        '--gutter': gutter,
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
  margin: calc(-1 * var(--gutter)) 0 0 calc(-1 * var(--gutter));
  width: calc(100% + var(--gutter));
  position: relative;

  > * {
    width: calc(var(--width) - var(--gutter)) !important;
    margin: var(--gutter) 0 0 var(--gutter);
    height: var(--height) !important;
    max-height: var(--height);
    overflow: hidden;
  }
`
