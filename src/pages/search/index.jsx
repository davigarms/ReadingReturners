import { SPACING_S, BREAKPOINT_M } from 'styles/dictionary'
import Stack from 'components/layout/stack'
import Box from 'components/layout/box'
import Container from 'components/layout/container'
import SearchBar from 'components/search/search-bar'
import SearchResults from 'components/search/search-results'
import books from 'google-books-search'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

export default function Index({ searchQuery = '' }) {
  const router = useRouter()

  const [view, setView] = useState('grid')
  const [hasSearched, setHasSearched] = useState(false)
  const [results, setResults] = useState([])
  const [searchText, setSearchText] = useState('')

  const doSearch = useCallback((searchText) => {
    books.search(searchText, { limit: 15 }, function (error, results) {
      if (!error) {
        setResults(results)
      }
      setHasSearched(true)
    })
  }, [])

  useEffect(() => {
    setSearchText(searchQuery)
    searchQuery && doSearch(searchQuery)
  }, [searchQuery, setSearchText, doSearch])

  const handleChange = (e) => setSearchText(e.target.value)

  const handleKeyPress = (e) =>
    e.key === 'Enter' && router.push(`/search/${searchText}`)

  return (
    <Container width={BREAKPOINT_M} fluid>
      <Box height={`calc(100vh - ${SPACING_S})`} padding={SPACING_S}>
        <Stack spacing={SPACING_S}>
          <SearchBar
            placeholder="Search for a book or an author..."
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            value={searchText}
          />
          <SearchResults
            view={view}
            results={results}
            hasSearched={hasSearched}
          />
        </Stack>
      </Box>
    </Container>
  )
}
