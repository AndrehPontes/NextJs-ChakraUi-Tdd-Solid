import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 11px;
        back-ground-color: blue;
    }

    body {
        font-family: -aple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubutun, Cantarell, 'Open Sans', 'Heveltica', sans-serif
    }

    .container {
        padding: 0 2rem;
        background-color: blue;
      }
`
export default GlobalStyles

