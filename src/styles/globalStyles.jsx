import {
  fontFamilies,
  fontSizes,
  fontWeights,
  spacing,
} from 'styles/dictionary'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fontFamilies.regular};
    margin: ${spacing.small};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fontWeights.bold};
  }

  h1 {
    font-size: ${fontSizes.h1};
  }

  h2 {
    font-size: ${fontSizes.h2};
  }

  h3 {
    font-size: ${fontSizes.h3};
  }

  h4 {
    font-size: ${fontSizes.h4};
  }

  h5 {
    font-size: ${fontSizes.h5};
  }

  h6 {
    font-size: ${fontSizes.h6};
  }

  p {
    font-size: ${fontSizes.paragraph};
  }


`

export default GlobalStyle
