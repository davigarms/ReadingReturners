import { SPACING_S } from 'styles/dictionary'
import BookItem from './book-item'
import Box from './layout/box'
import Container from './layout/container'
import Grid from './layout/grid'

export default function SearchResults({
  view,
  results,
  hasSearched,
}) {
  return (
    <Container>
      <Grid
        cols={
          view === 'grid' ? { xxs: 1, xs: 2, s: 5, m: 4, l: 5 } : 1
        }
        gridRatio={view === 'grid' && 2 / 3}
      >
        {results.length > 0
          ? results.map((result) => {
              return (
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
              )
            })
          : hasSearched && (
              <Box padding={`0 ${SPACING_S}`}>
                <h6>No books found</h6>
              </Box>
            )}
      </Grid>
    </Container>
  )
}
