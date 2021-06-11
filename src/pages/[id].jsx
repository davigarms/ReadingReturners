import { fetchAPI } from 'lib/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Index() {
  const router = useRouter()
  const { id } = router.query
  const [book, SetBook] = useState()

  useEffect(async () => {
    const fetchData = async () => {
      const data = (await fetchAPI(`/book/${id}`))[0] || {}
      SetBook(data)
    }
    fetchData()
  }, [id])

  return (
    <div>
      {book ? (
        <ul>
          <li>
            <h3>{book.title || 'Book not found'}</h3>
            <h4>{book.author || ''}</h4>
          </li>
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
