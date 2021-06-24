import styled from 'styled-components'

export default function SearchBar({ fluid }) {
  return (
    <Wrapper style={{ '--width': fluid ? '100%' : 'initial' }}>
      <input type="text" placeholder="Search..." />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  > * {
    width: var(--width);
  }
`
