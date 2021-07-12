import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {--font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}

  body {font-family:  var(--font-family)}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {font-weight: var(--font-weight-bold)}

  h1 {font-size: var(--font-size-h1)}

  h2 {font-size: var(--font-size-h2)}

  h3 {font-size: var(--font-size-h3)}

  h4 {font-size: var(--font-size-h4)}

  h5 {font-size: var(--font-size-h5)}

  h6 {font-size: var(--font-size-h6)}

  p  {font-size: var(--font-size-paragraph)}

  input {
    color: var(--color-gray1);
    font-size: var(--font-size-paragraph);
    padding: var(--spacing-xs) var(--spacing-s);
    border: var(--border-width-hairline) solid var(--color-gray2);
    border-radius: var(--radius-circle);

    ::placeholder {
      color: var(--color-gray2);
    }
    
    :focus {
      outline: none;
    }
  }

  .font-size-xs {font-size: var(--font-size-xs)}
  .font-size-s  {font-size: var(--font-size-s)}
  .font-size-m  {font-size: var(--font-size-m)}
  .font-size-l  {font-size: var(--font-size-l)}
  .font-size-xl {font-size: var(--font-size-xl)}
  .font-size-h6 {font-size: var(--font-size-h6)}
  .font-size-h5 {font-size: var(--font-size-h5)}
  .font-size-h4 {font-size: var(--font-size-h4)}
  .font-size-h3 {font-size: var(--font-size-h3)}
  .font-size-h2 {font-size: var(--font-size-h2)}
  .font-size-h1 {font-size: var(--font-size-h1)}

  .no-wrap {white-space: nowrap}
`

export default GlobalStyle
