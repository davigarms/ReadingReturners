import Stack from 'components/layout/stack'
import Box from 'components/layout/box'
import { SPACING_S, BREAKPOINT_S } from 'styles/dictionary'
import SearchBar from 'components/search-bar'
import books from 'google-books-search'
import { useState } from 'react'
import BookItem from 'components/book-item'

export default function Index() {
  const [view, setView] = useState('cover')
  const [hasSearched, setHasSearched] = useState(false)
  const [results, setResults] = useState([])
  const [searchText, setSearchText] = useState()

  const doSearch = (searchText) => {
    books.search(searchText, function (error, results) {
      if (!error) {
        setResults(results)
      }
      setHasSearched(true)
    })
  }

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') doSearch(searchText)
  }
  return (
    <Box width={BREAKPOINT_S} fluid>
      <Stack spacing={SPACING_S}>
        <SearchBar
          placeholder="Search for a book or an author..."
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          fluid
        />
        <ul>
          <Stack view={view}>
            {results.length > 0
              ? results.map((result) => {
                  return (
                    <BookItem
                      key={result.id}
                      view={view}
                      title={result.title}
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
    </Box>
  )
}
