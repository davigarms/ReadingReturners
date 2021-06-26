import Box from 'components/layout/box'
import { SPACING_S } from 'styles/dictionary'

export default function BookItem({ view, title, author }) {
  return (
    <Box padding={`0 ${SPACING_S}`}>
      <li>
        <h6>{title}</h6>
        <p>{author}</p>
      </li>
    </Box>
  )
}
