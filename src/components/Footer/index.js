import React from 'react'
import { Footer as FooterElement } from './styles'

export const Footer = () => {
  const date = new Date()
  const YEAR = date.getFullYear()
  return (
    <FooterElement>
      <p>
        Hecho con 💙 por <span>Eber Alejo</span> &copy; {YEAR}
      </p>
    </FooterElement>
  )
}
