import { fetchAPI } from 'lib/api'
import { PropTypes } from 'prop-types'

export default function Index({ books }) {
  return (
    <ul>
      {books.length > 0 ? (
        books.map((book) => {
          const content = (
            <li key={book._id}>
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
            </li>
          )
          return content
        })
      ) : (
        <li>
          <h3>No books found</h3>
        </li>
      )}
    </ul>
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
