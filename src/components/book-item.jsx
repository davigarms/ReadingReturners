import Box from 'components/layout/box'

export default function BookItem({
  view,
  title,
  author,
  thumbnail,
  padding,
}) {
  return (
    <Box padding={padding} backgroundImage={thumbnail} view={view}>
      <li>
        <h6>{title}</h6>
        <p>{author}</p>
      </li>
    </Box>
  )
}
