import React from 'react'
import ReactDOM from 'react-dom'

import { ContextProvider } from './Context'
import { App } from './App'

const ROOT_ELEMENT = document.querySelector('#root')

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  ROOT_ELEMENT
)
