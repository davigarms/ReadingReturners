import Search from './index.jsx'
import { useRouter } from 'next/router'

export default function SearchQuery() {
  const router = useRouter()
  const searchQuery = router.query.search

  return <Search searchQuery={searchQuery} />
}
