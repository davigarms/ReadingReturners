import Stack from 'styles/utils/stack'
import Container from 'styles/utils/container'
import { SPACING_SMALL } from 'styles/dictionary'
import SearchBar from 'components/search-bar'
import books from 'google-books-search'
import { useState } from 'react'

export default function Index() {
  const [hasSearched, setHasSearched] = useState(false)
  const [results, setResults] = useState([])
  const [searchText, setSearchText] = useState()

  console.log(results.length)

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
    <Container fluid>
      <Stack spacing={SPACING_SMALL}>
        <SearchBar
          placeholder="Search for a book or an author..."
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          fluid
        />
        <ul>
          <Stack>
            {results.length > 0
              ? results.map((result) => {
                  return (
                    <li key={result.id && result.id}>
                      <h6>{result.title && result.title}</h6>
                      <p>
                        {result.authors &&
                          result.authors.map((author, i, arr) =>
                            arr.length <= 1
                              ? author
                              : i < arr.length - 1
                              ? `${author}, `
                              : author
                          )}
                      </p>
                    </li>
                  )
                })
              : hasSearched && (
                  <li>
                    <h6>No books found</h6>
                  </li>
                )}
          </Stack>
        </ul>
      </Stack>
    </Container>
  )
}
