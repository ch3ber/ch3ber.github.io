import styled from 'styled-components'
import { mainTheme } from '../../../styles/themes/main'

export const A = styled.a`
  padding: 1rem;
  background-color: ${mainTheme.colors.primary600};
  border: 3px solid ${mainTheme.colors.primary600};
  border-radius: 1rem;
  display: grid;
  place-content: center center;
  transition: opacity 300ms ease;
  font-size: 1.8rem;

  ${({ gosth }) => {
    if (gosth) {
      return `
        background-color: transparent;
      `
    }
  }}

  &:hover {
    opacity: 0.8;
  }
`
