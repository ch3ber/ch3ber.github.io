import React, { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('mainTheme')

  const value = {
    theme,
    setTheme
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default { Consumer: Context.Consumer }
