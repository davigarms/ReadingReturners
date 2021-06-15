import { fetchAPI } from 'lib/api'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default function Index() {
  const router = useRouter()
  const { id } = router.query
  const [book, setBook] = useState()

  // const handler = async (req, res) => {
  const fetchData = useCallback(async () => {
    const data = (await fetchAPI(`/book/${id}`))[0] || {}
    setBook(data)
  }, [id])

  useEffect(() => {
    id && fetchData(id)
  }, [id, fetchData])

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
