import styled from 'styled-components'
import { useEffect, useRef } from 'react'

export default function SearchBar({
  placeholder = 'Search...',
  onKeyPress,
  onChange,
  value,
}) {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <Wrapper>
      <input
        ref={inputRef}
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
