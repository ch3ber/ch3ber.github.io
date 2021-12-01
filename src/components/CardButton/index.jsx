import React from 'react'

export const CardButton = ({ text, href, style, openOnNewPage = true }) => {
   return(
      <a
         className={`button-${style}`}
         href={href}
         target={openOnNewPage ? '_blank' : ''}
      >
         { text }
      </a>
   )
}
