import { createGlobalStyle } from 'styled-components'
import { mainTheme } from './themes/main'

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  color: ${mainTheme.colors.white};
  background-color: ${mainTheme.colors.black900};
}
img {
  width: 100%;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: ${mainTheme.colors.white}
}
`
