import { useFetchAPI } from 'lib/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { spacing, colors, fontWeights } from 'styles/dictionary'

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
            <h3>{book.title || 'Book not found'}</h3>
            <h4>{book.author || ''}</h4>
          </li>
        </ul>
      ) : (
        'Loading...'
      )}
      <style jsx>
        {`
          ul {
            padding: ${spacing.small};
            background-color: ${colors.yellow};
            li {
              margin: ${spacing.small};
            }
          }

          h3 {
            font-weight: ${fontWeights.bold};
          }
        `}
      </style>
    </div>
  )
}
