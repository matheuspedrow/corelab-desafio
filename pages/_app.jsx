import { createGlobalStyle } from 'styled-components'

const Globalstyle = createGlobalStyle `
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
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