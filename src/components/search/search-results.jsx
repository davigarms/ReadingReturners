import { SPACING_M } from 'styles/dictionary'
import GridList from 'components/layout/grid-list'
import Box from 'components/layout/box'
import BookItem from 'components/book/book-item'
import styled from 'styled-components'

export default function SearchResults({ view = 'list', results, hasSearched }) {
  return (
    <Wrapper>
      <GridList
        cols={view === 'card' ? { xxs: 1, xs: 2, s: 5 } : 1}
        gridRatio={view === 'card' && 2 / 3}
      >
        {results.length > 0
          ? results.map((result) => (
              <BookItem
                key={result.id}
                view={view}
                title={result.title}
                thumbnail={result.thumbnail}
                author={result.authors.join(', ')}
              />
            ))
          : hasSearched && (
              <li>
                <h6>No books found</h6>
              </li>
            )}
      </GridList>
      <Box height={SPACING_M} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
