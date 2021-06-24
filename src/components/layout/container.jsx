import styled from 'styled-components'
import { BREAK_POINT_MOBILE_LG } from 'styles/dictionary'

export default function Container({
  width = BREAK_POINT_MOBILE_LG,
  fluid,
  children,
}) {
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
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 var(--spacing);
  width: var(--width);
`
