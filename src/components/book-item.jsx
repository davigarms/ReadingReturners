import Box from 'components/layout/box'
import styled from 'styled-components'

export default function BookItem({
  view,
  title,
  author,
  thumbnail,
  padding,
}) {
  return (
    <Box
      padding={padding}
      backgroundImage={thumbnail}
      view={view}
      border
    >
      <Wrapper
        style={{ '--display': view === 'list' ? 'block' : 'none' }}
      >
        <h6>{title}</h6>
        <p>{author}</p>
      </Wrapper>
    </Box>
  )
}

const Wrapper = styled.li`
  > * {
    display: var(--display);
  }
`
