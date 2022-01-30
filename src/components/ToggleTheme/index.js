import React, { useContext } from 'react'
import { Context } from '../../Context'
import { IconContainer } from './styles'
import { BsMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(Context)

  const toggleTheme = () => {
    theme === 'lightTheme' ? setTheme('mainTheme') : setTheme('lightTheme')
  }

  const SIZE = 25

  switch (theme) {
    case 'mainTheme':
      return (
        <IconContainer type='button' onClick={() => toggleTheme()}>
          <FaSun size={`${SIZE}px`} />
        </IconContainer>
      )
    case 'lightTheme':
      return (
        <IconContainer type='button' onClick={() => toggleTheme()}>
          <BsMoonFill size={`${SIZE}px`} />
        </IconContainer>
      )
  }
}
