import React, { useContext } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Context } from './Context'

import { ThemeProvider } from 'styled-components'
import { Normalize } from './styles/Normalize'
import { GlobalStyles } from './styles/GlobalStyles'
import { mainTheme } from './styles/themes/main'
import { lightTheme } from './styles/themes/light'

import { Home } from './pages/home'

import { NavBar } from './components/NavBar'
import { ToggleTheme } from './components/ToggleTheme'

export const App = () => {
  const { theme } = useContext(Context)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'mainTheme' ? mainTheme : lightTheme}>
        <Normalize />
        <GlobalStyles />
        <ToggleTheme />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mywork' element={<p>mywork</p>} />
          <Route path='/services' element={<p>services</p>} />
          <Route path='/contact' element={<p>contact</p>} />
          <Route path='*' element={<p>Error404</p>} />
        </Routes>
        <NavBar />
      </ThemeProvider>
    </BrowserRouter>
  )
}
