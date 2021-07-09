import styled from 'styled-components'

export default function SearchBar({
  fluid,
  placeholder = 'Search...',
  onKeyPress,
  onChange,
}) {
  return (
    <Wrapper
      style={{
        '--width': fluid ? '100%' : 'initial',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  > * {
    width: var(--width);
  }
`
