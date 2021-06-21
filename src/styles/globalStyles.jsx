import { createGlobalStyle } from 'styled-components'
import { colors } from 'styles/dictionary'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.gray1}
  }
`
export default GlobalStyle
