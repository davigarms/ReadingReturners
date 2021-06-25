import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-family-regular);
    margin: var(--spacing-small);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weight-bold);
  }

  h1 {
    font-size: var(--font-size-h1);
  }

  h2 {
    font-size: var(--font-size-h2);
  }

  h3 {
    font-size: var(--font-size-h3);
  }

  h4 {
    font-size: var(--font-size-h4);
  }

  h5 {
    font-size: var(--font-size-h5);
  }

  h6 {
    font-size: var(--font-size-h6);
  }

  p {
    font-size: var(--font-size-paragraph);
  }

  input {
    color: var(--color-gray1);
    font-size: var(--font-size-paragraph);
    padding: var(--spacing-tiny) var(--spacing-small);
    border: var(--border-width-hairline) solid var(--color-gray3);
    border-radius: var(--radius-circle);
    ::placeholder {
      color: var(--color-gray2);
    }
    :focus {
      outline: none;
    }
  }
`

export default GlobalStyle
