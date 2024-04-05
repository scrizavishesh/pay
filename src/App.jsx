import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Index from './Dashboard/Index'
import WithoutAuth from './MainRoute/WithoutAuth'

const App = () => {

  const token = localStorage.getItem("token");
  return (
    <>
      { token ?
        <BrowserRouter>
        <Index />
      </BrowserRouter>
      :
      <BrowserRouter>
        <WithoutAuth />
      </BrowserRouter>
      }
    </>
  )
}

export default App

