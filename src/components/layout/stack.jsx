import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SPACING_TINY } from 'styles/dictionary'

export default function Stack({
  spacing = SPACING_TINY,
  view = 'list',
  height,
  cols = 1,
  children,
}) {
  const wrapperRef = useRef()
  const [calculatedHeight, setCalculatedHeight] = useState()

  useEffect(() => {
    setCalculatedHeight(
      view === 'cover'
        ? height ||
            `${(wrapperRef.current.offsetWidth / cols / 2) * 2.5}px`
        : 'initial'
    )
  }, [height, view, cols])

  cols = view === 'list' ? 1 : view === 'cover' && cols < 2 ? 2 : cols

  return (
    <Wrapper
      ref={wrapperRef}
      style={{
        '--height': calculatedHeight,
        '--width': `${100 / cols}%`,
        '--spacing': spacing,
        '--column-spacing': view === 'cover' && 0,
      }}
      cols={cols}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1 1 var(--width);
    height: var(--height);
    max-height: var(--height);
    overflow: hidden;
  }

  > * + * {
    margin-top: var(--spacing);
  }

  > :nth-child(-n + ${(props) => props.cols}) {
    margin-top: var(--column-spacing);
  }
`
