import 'modern-reset/reset.css'
import 'styles/globals.css'
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
