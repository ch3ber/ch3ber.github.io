import React from 'react'
import { H2, Decoration } from './styles'

export const PageTitle = ({ children }) => {
  return (
    <H2>
      <Decoration>[</Decoration>
      {children}
      <Decoration>]</Decoration>
    </H2>
  )
}
