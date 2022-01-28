import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Normalize } from './styles/Normalize'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
import { Home } from './pages/home'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Normalize />
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mywork' element={<p>mywork</p>} />
          <Route path='/services' element={<p>services</p>} />
          <Route path='/contact' element={<p>contact</p>} />
          <Route path='*' element={<p>Error404</p>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
