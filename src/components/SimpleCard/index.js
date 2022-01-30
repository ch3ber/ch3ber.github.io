import React from 'react'
import { Container, Title } from './styles'

export const SimpleCard = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
