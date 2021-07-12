import styled from 'styled-components'
import { SPACING_S } from 'styles/dictionary'

export default function Stack({ children, spacing = SPACING_S }) {
  return (
    <Wrapper
      style={{
        '--spacing': spacing,
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
  position: relative;

  > * + * {
    margin-top: var(--spacing);
    overflow: auto !important;
  }
`
