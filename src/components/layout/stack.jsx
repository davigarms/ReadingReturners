import styled from 'styled-components'
import { SPACING_S } from 'styles/dictionary'

export default function Stack({
  spacing = SPACING_S,
  height,
  children,
}) {
  return (
    <Wrapper
      style={{
        '--spacing': spacing,
        '--height': height,
      }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: inherit;

  > * + * {
    margin-top: var(--spacing);
    overflow: auto;
  }
`
