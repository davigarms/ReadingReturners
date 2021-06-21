import styled from 'styled-components'

export default function Stack({ spacing, children }) {
  return <Wrapper style={{ '--spacing': spacing }}>{children}</Wrapper>
}

const Wrapper = styled.div`
  > * + * {
    margin-top: var(--spacing, 0px);
  }
`
