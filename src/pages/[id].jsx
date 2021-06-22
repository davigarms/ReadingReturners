import { useFetchAPI } from 'lib/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Index() {
  const router = useRouter()
  const { id } = router.query
  const [book, setBook] = useState()

  const fetchData = useFetchAPI('/book', id, setBook)

  useEffect(() => {
    id && fetchData()
  }, [id, fetchData])

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
