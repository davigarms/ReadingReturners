import styled from 'styled-components'
import { SPACING_TINY } from 'styles/dictionary'

export default function Stack({ spacing = SPACING_TINY, children }) {
  return <Wrapper style={{ '--spacing': spacing }}>{children}</Wrapper>
}

const Wrapper = styled.div`
  > * + * {
    margin-top: var(--spacing);
  }
`
