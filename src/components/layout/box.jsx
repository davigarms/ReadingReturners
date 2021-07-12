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
  padding = 0,
  position = 'relative',
  top,
  bottom,
  left,
  right,
  width = '100%',
  height,
  textAlign,
}) {
  const styles = {
    '--color': color,
    '--background-color': `${backgroundColor}`,
    '--background': `${
      backgroundImage
        ? `url(${backgroundImage}) ${backgroundRepeat} ${backgroundPosition}`
        : ''
    }`,
    '--background-size': backgroundImage && backgroundSize,
    '--border': border ? `${borderWidth} ${borderStyle} ${borderColor}` : '',
    '--padding': padding,
    '--position': position,
    '--top': top,
    '--bottom': bottom,
    '--left': left,
    '--right': right,
    '--width': width,
    '--height': height,
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
