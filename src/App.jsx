import React from 'react'
import Index from './Dashboard/Index'
import { BrowserRouter } from 'react-router-dom';
import Login from './Dashboard/Login';

const App = () => {

  const token = localStorage.getItem("token");

  return (
    <>
      {token ? <BrowserRouter> <Index /> </BrowserRouter> : <BrowserRouter> <Login />  </BrowserRouter>}
    </>
  )
}

export default App
