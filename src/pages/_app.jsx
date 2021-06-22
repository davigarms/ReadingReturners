import 'modern-reset/reset.css'
import 'styles/dictionary.css'
import GlobalStyle from 'styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
