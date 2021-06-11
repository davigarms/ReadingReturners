import { fetchAPI } from '@/lib/api'

export default function Index({ books }) {
  return (
    <ul>
      {books.map((book, key) => {
        return (
          <li key={key}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
          </li>
        )
      })}
    </ul>
  )
}

export async function getStaticProps() {
  const books = (await fetchAPI('/books')) || []
  return {
    props: { books },
  }
}
