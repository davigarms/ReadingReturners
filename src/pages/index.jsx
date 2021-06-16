import { fetchAPI } from 'lib/api'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { spacing, colors, fontWeights } from 'styles/dictionary'

const List = styled.ul`
  padding: ${spacing.small};
  background-color: ${colors.blue1};
  color: ${colors.white};
  li {
    margin: ${spacing.small};
  }

  h3 {
    font-weight: ${fontWeights.bold};
  }
`

export default function Index({ books }) {
  return (
    <List>
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
    </List>
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
