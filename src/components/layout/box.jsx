import styled from 'styled-components'
import { BORDER_WIDTH_HAIRLINE } from 'styles/dictionary'
import { COLOR_GRAY2 } from 'styles/dictionary'

export default function Box({
  children,
  view = 'list',
  color,
  backgroundColor,
  backgroundImage,
  fluid,
  padding,
  width,
  border,
  borderColor = COLOR_GRAY2,
  borderWidth = BORDER_WIDTH_HAIRLINE,
  borderStyle = 'solid',
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
        '--border-color': border && borderColor,
        '--border-width': border && borderWidth,
        '--border-style': border && borderStyle,
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
  border: var(--border-color) var(--border-width) var(--border-style);
`
