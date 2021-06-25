import styled from 'styled-components'

export default function Box({
  width,
  fluid,
  flex,
  display = 'block',
  padding,
  backgroundColor,
  color,
  children,
}) {
  const maxWidth = fluid ? width : 'initial'
  width = fluid ? '100%' : width

  return (
    <Wrapper
      style={{
        '--max-width': maxWidth,
        '--width': width,
        '--display': flex ? 'flex' : display,
        '--padding': padding,
        '--background-color': backgroundColor,
        '--color': color,
      }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: var(--background-color);
  color: var(--color);
  display: var(--display);
  max-width: var(--max-width);
  padding: var(--padding);
  width: var(--width);
`
