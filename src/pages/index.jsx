import Stack from 'components/layout/stack'
import Box from 'components/layout/box'
import Container from 'components/layout/container'
import { SPACING_S, BREAKPOINT_M } from 'styles/dictionary'
import SearchBar from 'components/search-bar'
import books from 'google-books-search'
import { useState } from 'react'
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
      <Stack spacing={SPACING_S}>
        <SearchBar
          placeholder="Search for a book or an author..."
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          fluid
        />
        <ul>
          <Stack
            view={view}
            cols={{ xxs: 1, xs: 2, s: 5, m: 4, l: 5 }}
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
          </Stack>
        </ul>
      </Stack>
    </Container>
  )
}
