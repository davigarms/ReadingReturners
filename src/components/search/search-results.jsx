import { SPACING_M, SPACING_S } from 'styles/dictionary'
import GridList from 'components/layout/grid-list'
import Box from 'components/layout/box'
import BookItem from 'components/book/book-item'
import styled from 'styled-components'

export default function SearchResults({ view, results, hasSearched }) {
  return (
    <Wrapper>
      <GridList
        cols={view === 'grid' ? { xxs: 1, xs: 2, s: 5 } : 1}
        gridRatio={view === 'grid' && 2 / 3}
      >
        {results.length > 0
          ? results.map((result) => (
              <BookItem
                key={result.id}
                view={view}
                title={result.title}
                thumbnail={result.thumbnail}
                author={
                  result.authors &&
                  result.authors.map((author, i, arr) =>
                    arr.length <= 1
                      ? author
                      : i < arr.length - 1
                      ? `${author}, `
                      : author
                  )
                }
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
