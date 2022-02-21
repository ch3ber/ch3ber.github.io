import styled from 'styled-components'

export const H2 = styled.h2`
  text-align: center;
  margin: 0;
  text-transform: capitalize;
`
export const H1 = styled.h1`
  text-align: center;
  margin: 0;
  text-transform: capitalize;
`

export const Decoration = styled.span`
  color: ${({ theme }) => theme.primary.dark};
  margin: 0 1rem;
`
