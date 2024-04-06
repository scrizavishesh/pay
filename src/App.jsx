import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Dashboard/Index'
import Login from './Dashboard/Login'
import Create_Fund from './Pages/Create_Fund'

const App = () => {

  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create_fund/:order_id/:receipt/:agent" element={<Create_Fund />} />
      </Routes>
      {
        token ?
          <Index /> :
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
      }

    </BrowserRouter>
  )
}

export default App;

