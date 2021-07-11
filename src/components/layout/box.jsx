import styled from 'styled-components'
import { BORDER_WIDTH_HAIRLINE, COLOR_BLACK } from 'styles/dictionary'

export default function Box({
  children,
  border,
  color = COLOR_BLACK,
  backgroundColor = 'transparent',
  backgroundImage = '',
  borderStyle = 'solid',
  borderColor = COLOR_BLACK,
  borderWidth = BORDER_WIDTH_HAIRLINE,
  padding = 0,
  position = 'relative',
  top = 'initial',
  bottom = 'initial',
  left = 'initial',
  right = 'initial',
  width = '100%',
  height = 'unset',
  textAlign = 'left',
}) {
  return (
    <Wrapper
      style={{
        '--color': color,
        '--background-image': backgroundImage && `url(${backgroundImage})`,
        '--background-color': backgroundColor,
        '--border-color': border && borderColor,
        '--border-width': border && borderWidth,
        '--border-style': border && borderStyle,
        '--padding': padding,
        '--position': position,
        '--top': top,
        '--bottom': bottom,
        '--left': left,
        '--right': right,
        '--width': width,
        '--height': height,
        '--text-align': textAlign,
      }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: var(--color);
  background-color: var(--background-color);
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  border: var(--border-color) var(--border-width) var(--border-style);
  padding: var(--padding);
  position: var(--position);
  top: var(--top);
  bottom: var(--bottom);
  left: var(--left);
  right: var(--right);
  width: var(--width);
  height: var(--height);
  text-align: var(--text-align);
`
