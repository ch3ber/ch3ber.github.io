import { createGlobalStyle } from 'styled-components'
import { media } from './breakpoints'

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
  transition: background-color 300ms ease-out;

  ${media.sm} {
    font-size: 1.8rem;
  }
  ${media.lg} {
    font-size: 2rem;
  }
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
