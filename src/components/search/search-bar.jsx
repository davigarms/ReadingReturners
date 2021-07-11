import styled from 'styled-components'

export default function SearchBar({
  placeholder = 'Search...',
  onKeyPress,
  onChange,
  value,
}) {
  return (
    <Wrapper>
      <input
        type="text"
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  > * {
    width: 100%;
  }
`
