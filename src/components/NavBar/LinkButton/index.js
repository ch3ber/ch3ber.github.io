import React from 'react'
import { A } from './styles'

export const LinkButton = ({
  link,
  children,
  download = null,
  gosth = false
}) => {
  if (download !== null) {
    return (
      <A download={download} href={link} gosth={gosth}>
        {children}
      </A>
    )
  }
  if (download === null) {
    return (
      <A href={link} gosth={gosth}>
        {children}
      </A>
    )
  }
}
