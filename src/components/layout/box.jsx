import styled from 'styled-components'

export default function Box({
  children,
  view = 'list',
  color,
  backgroundColor,
  backgroundImage,
  fluid,
  padding,
  width,
}) {
  const maxWidth = fluid ? width : 'initial'
  width = fluid ? '100%' : width

  return (
    <Wrapper
      style={{
        '--color': color,
        '--background-image':
          view === 'cover' ? `url(${backgroundImage})` : '',
        '--background-color': backgroundColor,
        '--max-width': maxWidth,
        '--padding': padding,
        '--width': width,
      }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--background-color);
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color);
  max-width: var(--max-width);
  padding: var(--padding);
  width: var(--width);
`
