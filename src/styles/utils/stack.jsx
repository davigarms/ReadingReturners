import styled from 'styled-components'
import { SPACING_TINY } from '../dictionary'

export default function stack({ spacing = SPACING_TINY, children }) {
  return <Wrapper style={{ '--spacing': spacing }}>{children}</Wrapper>
}

const Wrapper = styled.div`
  > * + * {
    margin-top: var(--spacing);
  }
`
