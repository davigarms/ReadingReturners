import Box from 'components/layout/box'
import styled from 'styled-components'

export default function BookItem({ view, title, author, thumbnail }) {
  return (
    <Wrapper style={{ '--display': view === 'grid' ? 'none' : 'block' }}>
      <Box
        backgroundImage={view === 'grid' && thumbnail}
        border={view === 'grid'}
      >
        <h6>{title}</h6>
        <p>{author}</p>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  h6,
  p {
    display: var(--display);
  }
`
