import styled from 'styled-components'

export const A = styled.a`
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary.regular};
  border: 3px solid ${({ theme }) => theme.primary.regular};
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
