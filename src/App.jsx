import React from 'react'
import Index from './Dashboard/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create_Fund from './Pages/Create_Fund';
import Login from './Dashboard/Login';

const App = () => {

  const token = localStorage.getItem("token");

  return (
    <>
      {/* {token ? <BrowserRouter> <Index /> </BrowserRouter> : <BrowserRouter> <WithoutAuth />  </BrowserRouter>} */}

      <BrowserRouter>
        <Routes>
          <Route path="/create_fund/:urlParam" element={<Create_Fund />} />
        </Routes>
        {token && <Index />}
        {!token && <Login />}
      </BrowserRouter>
    </>
  )
}

export default App
