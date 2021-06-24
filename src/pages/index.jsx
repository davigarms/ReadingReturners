import { fetchAPI } from 'lib/api'
import { PropTypes } from 'prop-types'
import Stack from 'styles/utils/stack'
import { SPACING_SMALL } from '../styles/dictionary'
import SearchBar from '../components/search-bar'
import Container from '../styles/utils/container'

export default function Index({ books }) {
  return (
    <Container fluid>
      <Stack spacing={SPACING_SMALL}>
        <SearchBar fluid />
        <ul>
          <Stack>
            {books.length > 0 ? (
              books.map((book) => {
                const content = (
                  <li key={book._id}>
                    <h6>{book.title}</h6>
                    <p>{book.author}</p>
                  </li>
                )
                return content
              })
            ) : (
              <li>
                <h3>No books found</h3>
              </li>
            )}
          </Stack>
        </ul>
      </Stack>
    </Container>
  )
}

export async function getStaticProps() {
  const books = (await fetchAPI('/books')) || []
  return {
    props: { books },
  }
}

Index.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
}
