import { fetchAPI } from 'lib/api'
import PropTypes from 'prop-types'

export default function Index({ book }) {
  return (
    <ul>
      <li>
        <h3>{book.title || 'Book not found'}</h3>
        <h4>{book.author || ''}</h4>
      </li>
    </ul>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const book = (await fetchAPI(`'/book/'${params.id}`))[0] || {}
  return {
    props: { book },
  }
}

Index.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
}
