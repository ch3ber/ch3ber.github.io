import React from 'react'
import { Container, Title, TitleContainer } from './styles'

export const SimpleCard = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {children}
    </Container>
  )
}
