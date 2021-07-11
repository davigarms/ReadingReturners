import { SPACING_S, BREAKPOINT_M } from 'styles/dictionary'
import BookItem from 'components/book/book-item'
import Box from 'components/layout/box'
import Container from 'components/layout/container'
import GridList from 'components/layout/grid-list'
import { useGetData } from 'lib/api'
import { useEffect } from 'react'

export default function Index({ path = '/books' }) {
  const [books, getBook] = useGetData(path)

  useEffect(() => {
    path && getBook()
  }, [path, getBook])

  return (
    <Container width={BREAKPOINT_M} fluid>
      <Box padding={SPACING_S}>
        <GridList>
          {!books ? (
            <li>
              <h6>Loading...</h6>
            </li>
          ) : books && Array.isArray(books) ? (
            books.map((book) => (
              <BookItem
                key={book._id}
                title={book.title}
                author={book.author}
              />
            ))
          ) : (
            <li>
              <h6>No books found</h6>
            </li>
          )}
        </GridList>
      </Box>
    </Container>
  )
}
