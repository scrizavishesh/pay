import React from 'react'
import Index from './Dashboard/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create_Fund from './Pages/Create_Fund';
import Login from './Dashboard/Login';

const App = () => {

  const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/create_fund/:urlParam" element={<Create_Fund />} />
          {!token && <Route path="/" element={<Login />} />}
        </Routes>
        {token && <Index />}
      </BrowserRouter>
    </>
  )
}

export default App
