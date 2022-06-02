import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const Globalstyle = createGlobalStyle `
* {
  padding: 0;
  margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.background};
  }

  a {
    color: ${props => props.theme.primary};
    font-weight: bold;
    text-decoration: none;
    transition: 0.5s;
  }

`

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App