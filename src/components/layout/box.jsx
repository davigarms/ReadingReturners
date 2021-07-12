import styled from 'styled-components'
import { BORDER_WIDTH_HAIRLINE, COLOR_BLACK } from 'styles/dictionary'

export default function Box({
  children,
  border,
  color,
  backgroundColor,
  backgroundImage,
  backgroundRepeat = 'no-repeat',
  backgroundSize = 'cover',
  backgroundPosition = 'top center',
  borderStyle = 'solid',
  borderColor = COLOR_BLACK,
  borderWidth = BORDER_WIDTH_HAIRLINE,
  borderRadius,
  padding = 0,
  position = 'relative',
  top,
  bottom,
  left,
  right,
  width = '100%',
  height,
  overflow,
  textAlign,
}) {
  const styles = {
    '--color': color,
    '--background-color': `${backgroundColor}`,
    '--background': `${
      backgroundImage === 'none'
        ? 'none'
        : backgroundImage &&
          `url(${backgroundImage}) ${backgroundRepeat} ${backgroundPosition}`
    }`,
    '--background-size':
      backgroundImage && backgroundImage !== 'none' && backgroundSize,
    '--border':
      border === 'none'
        ? 'none'
        : border && `${borderWidth} ${borderStyle} ${borderColor}`,
    '--border-radius': borderRadius,
    '--padding': padding,
    '--position': position,
    '--top': top,
    '--bottom': bottom,
    '--left': left,
    '--right': right,
    '--width': width,
    '--height': height,
    '--overflow': overflow,
    '--text-align': textAlign,
  }
  const validStyles = Object.fromEntries(
    Object.entries(styles).filter(
      ([, value]) =>
        (value && value.indexOf('undefined') < 0) || typeof value === 'number'
    )
  )

  return <Wrapper style={{ ...validStyles }}>{children}</Wrapper>
}

const Wrapper = styled.div`
  color: var(--color);
  background: var(--background);
  background-size: var(--background-size);
  background-color: var(--background-color);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: var(--padding);
  position: var(--position);
  top: var(--top);
  bottom: var(--bottom);
  left: var(--left);
  right: var(--right);
  width: var(--width);
  height: var(--height);
  overflow: var(--overflow);
  text-align: var(--text-align);
`
