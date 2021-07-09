import Stack from 'components/layout/stack'
import Box from 'components/layout/box'
import { SPACING_S, SPACING_M, BREAKPOINT_M } from 'styles/dictionary'
import SearchBar from 'components/search-bar'
import books from 'google-books-search'
import { useState } from 'react'
import Container from 'components/layout/container'
import SearchResults from 'components/search-results'

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
          <SearchResults
            view={view}
            results={results}
            hasSearched={hasSearched}
          />
          <Box height={SPACING_M}></Box>
        </Stack>
      </Box>
    </Container>
  )
}
