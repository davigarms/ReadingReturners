import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-families-regular);
    margin: var(--spacing-small);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weights-bold);
  }

  h1 {
    font-size: var(--font-sizes-h1);
  }

  h2 {
    font-size: var(--font-sizes-h2);
  }

  h3 {
    font-size: var(--font-sizes-h3);
  }

  h4 {
    font-size: var(--font-sizes-h4);
  }

  h5 {
    font-size: var(--font-sizes-h5);
  }

  h6 {
    font-size: var(--font-sizes-h6);
  }

  p {
    font-size: var(--font-sizes-paragraph);
  }

  li {
    border: var(--border-widths-hairline) solid var(--colors-blue1);
  }
`

export default GlobalStyle
