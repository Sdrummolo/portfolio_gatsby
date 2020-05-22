import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --main: #0077b6;
    --dark-grey: #333333;
    --light-grey: #525252;
    --white: #fff;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body, html {
    font-size: 16px;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: var(--light-grey);
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;

     /* Disallow vertical overflow if menu is open on mobile */
    @media (max-width: 768px) {
      overflow-y: ${props => (props.hideOverflowY ? "hidden" : "visible")};
    }
  }

  a {
    text-decoration: none;
    color: var(--light-grey)
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
