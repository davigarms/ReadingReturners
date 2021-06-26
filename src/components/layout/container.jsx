import styled from 'styled-components'

export default function Container({ children, fluid, width }) {
  const maxWidth = fluid ? width : 'initial'
  width = fluid ? '100%' : width

  return (
    <Wrapper
      style={{
        '--max-width': maxWidth,
        '--width': width,
      }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);
  width: var(--width);
`
