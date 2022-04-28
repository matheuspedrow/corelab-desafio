import { createGlobalStyle } from 'styled-components'

const Globalstyle = createGlobalStyle `
* {
  padding: 0;
  margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #3A3A3A;
  }

  a {
    color: #8933CD;
    font-weight: bold;
    text-decoration: none;
  }
`

function App ({ Component, pageProps }) {
  return (
    <>
      <Globalstyle />
      <Component {...pageProps} />
    </>
  )
}

export default App