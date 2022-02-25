import React from 'react'
import { H1, H2, Decoration } from './styles'

export const PageTitle = ({ isSubTilte, children }) => {
  return isSubTilte
    ? (
      <H2>
        <Decoration>[</Decoration>
        {children}
        <Decoration>]</Decoration>
      </H2>
      )
    : (
      <H1>
        <Decoration>[</Decoration>
        {children}
        <Decoration>]</Decoration>
      </H1>
      )
}
