import Stack from 'components/layout/stack'
import Box from 'components/layout/box'
import { SPACING_S, SPACING_M, BREAKPOINT_M } from 'styles/dictionary'
import SearchBar from 'components/search-bar'
import books from 'google-books-search'
import { useState } from 'react'
import Container from 'components/layout/container'
import Grid from 'components/layout/grid'
import BookItem from 'components/book-item'

export default function Index() {
  const [view, setView] = useState('grid')
  const [hasSearched, setHasSearched] = useState(false)
  const [results, setResults] = useState([])
  const [searchText, setSearchText] = useState()

  const doSearch = (searchText) => {
    books.search(
      searchText,
      { limit: 15 },
      function (error, results) {
        if (!error) {
          setResults(results)
        }
        setHasSearched(true)
      }
    )
  }

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') doSearch(searchText)
  }

  return (
    <Container width={BREAKPOINT_M} fluid>
      <Box
        height={`calc(100vh - ${SPACING_S})`}
        padding={SPACING_S}
        fluid
      >
        <Stack spacing={SPACING_S}>
          <SearchBar
            placeholder="Search for a book or an author..."
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            fluid
          />
          <Container>
            <Grid
              cols={
                view === 'grid'
                  ? { xxs: 1, xs: 2, s: 5, m: 4, l: 5 }
                  : 1
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
          <Box height={SPACING_M}></Box>
        </Stack>
      </Box>
    </Container>
  )
}
