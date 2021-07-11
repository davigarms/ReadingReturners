import { SPACING_M, SPACING_S } from 'styles/dictionary'
import Grid from 'components/layout/grid'
import Box from 'components/layout/box'
import BookItem from 'components/book/book-item'
import styled from 'styled-components'

export default function SearchResults({ view, results, hasSearched }) {
  return (
    <Wrapper>
      <Grid
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
                padding={`0 ${SPACING_S}`}
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
              <Box padding={`0 ${SPACING_S}`}>
                <h6>No books found</h6>
              </Box>
            )}
      </Grid>
      <Box height={SPACING_M} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
