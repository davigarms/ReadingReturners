import Books from './index.jsx'
import { useRouter } from 'next/router'

export default function BookQuery() {
  const router = useRouter()
  const { id } = router.query

  const path = id ? `/book/${id}` : false

  return <Books path={path} />
}
