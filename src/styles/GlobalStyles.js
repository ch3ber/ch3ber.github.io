import { createGlobalStyle } from 'styled-components'

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
  color: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.background.dark};
}
img {
  width: 100%;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: ${({ theme }) => theme.fonts.regular};
}
`
