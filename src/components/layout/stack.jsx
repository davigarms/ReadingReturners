import styled from 'styled-components'
import { SPACING_TINY } from 'styles/dictionary'

export default function Stack({
  spacing = SPACING_TINY,
  view = 'list',
  cols = 1,
  children,
}) {
  cols =
    view === 'list'
      ? 1
      : view === 'cover' && cols < 2
      ? 2
      : cols

  return (
    <Wrapper
      style={{
        '--height': view === 'cover' ? '11rem' : 'unset',
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
  }

  > * + * {
    margin-top: var(--spacing);
  }

  > :nth-child(-n + ${(props) => props.cols}) {
    margin-top: var(--column-spacing);
  }
`
