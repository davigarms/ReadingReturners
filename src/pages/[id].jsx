import { useGetData } from 'lib/api'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Index() {
  const router = useRouter()
  const { id } = router.query

  const [book, getBook] = useGetData('/book', id)

  useEffect(() => {
    id && getBook()
  }, [id, getBook])

  return (
    <div>
      {book ? (
        <ul>
          <li>
            <h6>{book.title || 'Book not found'}</h6>
            <p>{book.author || ''}</p>
          </li>
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
