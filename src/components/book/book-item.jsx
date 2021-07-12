import Box from 'components/layout/box'
import Stack from 'components/layout/stack'
import styled from 'styled-components'
import {
  RADIUS_HARD,
  RADIUS_ROUNDED,
  SPACING_XL,
  SPACING_XS,
  SPACING_XXS,
} from 'styles/dictionary'

export default function BookItem({ view = 'list', title, author, thumbnail }) {
  return (
    <Wrapper
      style={{
        '--display-list': view === 'list' ? 'block' : 'none',
        '--display-card': view === 'card' ? 'block' : 'none',
      }}
    >
      <div className="card-view">
        <Box
          backgroundImage={thumbnail}
          border
          borderRadius={RADIUS_ROUNDED}
          overflow="hidden"
        >
          <Box
            backgroundColor="rgba(0,0,0,.5)"
            backgroundImage="none"
            bottom={0}
            border="none"
            borderRadius={RADIUS_HARD}
            color="white"
            height={SPACING_XL}
            padding={SPACING_XS}
            position="absolute"
          >
            <h6 className="font-size-s no-wrap" title={title}>
              {title.length > 16 ? `${title.substring(0, 16)}...` : title}
            </h6>
            <p className="font-size-xs no-wrap" title={author}>
              {author.length > 19 ? `${author.substring(0, 19)}...` : author}
            </p>
          </Box>
        </Box>
      </div>
      <div className="list-view">
        <h6>{title}</h6>
        <p>{author}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  .list-view {
    display: var(--display-list);
  }
  .card-view {
    display: var(--display-card);
  }
`
